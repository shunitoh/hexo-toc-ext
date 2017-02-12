import 'babel-polyfill';
import assign from 'object-assign';
import toc from 'markdown-toc';
import cheerio from 'cheerio';
import _ from 'lodash';

export default class Filter {
  /**
   * insert
   * @param data
   * @returns data
   */
  insert(data) {
    const options = assign({}, this.config.toc);
    // add class option
    if (options.class) {
      data.content = data.content.replace(
        '<!-- toc -->',
        `<div class="${options.class}Start"></div><!-- toc --><div class="${options.class}End"></div>`
      );
    }
    return data;
  }

  /**
   * heading
   * @param data
   * @returns data
   */
  heading(data) {
    let $ = cheerio.load(data.content, {decodeEntities: false} );
    let tocContent = '';
    let tocEndTags = [];
    let headingMap = {};
    let beforeHeading = '';
    let count = 0;
    let firstFlg = true;
    const options = assign({}, this.config.toc);
    const headings = $('h1, h2, h3, h4, h5, h6');
    const headingFormat = {h1: 1, h2: 2, h3: 3, h4: 4, h5: 5, h6: 6};

    headings.each( function(hid, hd) {
      count++;

      // skip index
      if (count === 1 && options.firstHeaderTagSkip) {
        return;
      }

      // init
      if (!headingMap[hd.name]) {
        headingMap[hd.name] = 0;
      }
      headingMap[hd.name] = parseInt(headingMap[hd.name]) + 1;

      // First h
      if (firstFlg) {
        tocContent += '<ul><li>';
        tocEndTags.push('</ul>', '</li>');
        firstFlg = false;

      // flat table of contents
      } else if (options.notIndent) {
        tocContent += tocEndTags.pop();
        tocContent += '<li>';
        tocEndTags.push('</li>');
        if (headingFormat[beforeHeading] > headingFormat[hd.name]) {
          delete (headingMap[beforeHeading]);
        }

      // Equal heading level. ex) (before)h2 -> (current)h2, h3 -> h3
      } else if (beforeHeading === hd.name) {
        tocContent += tocEndTags.pop();
        tocContent += '<li>';
        tocEndTags.push('</li>');

      // 1level down. h2 -> h3
      } else if (headingFormat[beforeHeading] < headingFormat[hd.name]) {
        tocContent += '<ul><li>';
        tocEndTags.push('</ul>', '</li>');

      // 1level up. h3 -> h2
      } else if (headingFormat[beforeHeading] > headingFormat[hd.name]) {
        delete (headingMap[beforeHeading]);
        for (let i = 0; i < (headingFormat[beforeHeading] - headingFormat[hd.name]); i++) {
          tocContent += tocEndTags.pop();
          tocContent += tocEndTags.pop();
          tocContent += tocEndTags.pop();
        }
        tocContent += '<li>';
        tocEndTags.push('</li>');
      }
      beforeHeading = _.cloneDeep(hd.name);
      let headingNumber = `${_.values(headingMap).join('.')}. `;

      // get title
      let $title = $(this);
      let title = $title.text();
      const id = toc.slugify(title, options);
      $title.attr('id', id);

      // set anchorOptions
      let anchorOpts = {
        heading: {style: 'header-anchor', notIncludeHeading: true},
        contents: {style: 'contents-anchor'}
      };
      if (options.anchor) {
        anchorOpts = assign(anchorOpts, options.anchor);
      }

      // set anchor-text and heading-text
      let anchorText = String(headingNumber);
      let headingText = '';
      if (_.has(anchorOpts, ['heading', 'notIncludeHeading']) && anchorOpts.heading.notIncludeHeading) {
        anchorText = '';
        headingText = String(headingNumber);
      }

      $title.prepend(
        `<a href="#${id}" class="${anchorOpts.heading.style}">${anchorText}</a>${headingText}`
      );
      tocContent +=
        `<a href="#${id}" class="${anchorOpts.contents.style}">${String(headingNumber) + title}</a>`;
    });

    _.forEachRight(tocEndTags, (endTag) => {
      tocContent += endTag;
    });
    data.content = $.html();

    // add class option
    if (options.class) {
      data.content = data.content
      .replace(
        `<div class="${options.class}Start"></div>`, `<div class="${options.class}">`
      ).replace(
        `<div class="${options.class}End"></div>`, '</div>'
      ).replace(
        '<!-- toc -->', tocContent
      );
    }
    return data;
  }
}
