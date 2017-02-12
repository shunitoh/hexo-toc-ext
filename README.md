# hexo-toc-ext
[![npm:](https://img.shields.io/npm/v/hexo-toc-ext.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-toc-ext)
[![Package Quality](http://npm.packagequality.com/shield/hexo-toc-ext.svg)](http://packagequality.com/#?package=hexo-toc-ext)
[![Build Status](https://travis-ci.org/shunitoh/hexo-toc-ext.svg?branch=master)](https://travis-ci.org/shunitoh/hexo-toc-ext)

Added chapter format to [hexo-toc](https://github.com/bubkoo/hexo-toc).

## Install

```node
npm install hexo-toc-ext --save
```

## Options

All the options of [markdown-toc](https://github.com/jonschlinkert/markdown-toc),
slugify function, and heading anchor options can be specified as follow in you `_config.yml`:

```yaml
toc:
  maxdepth: 3
  class: toc
  slugify: transliteration
  indent: true # default(true)
  anchor:
    contents:
      style: contents-header
    heading:
      style: header-anchor
      notIncludeHeading: false # default(false)
```

- `maxdepth`: Use headings whose depth is at most maxdepth.
- `class`: The CSS Class for the toc. (*Default is `false`*)
- `slugify`: Choose which slugify function you want to use. Currently support [uslug](https://github.com/jeremys/uslug) (*Default*) and [transliteration](https://github.com/andyhu/node-transliteration).
- `anchor`: Whether should have an anchor for each headings. (*Default is `false`*)
    - `contents`:
        - `style`: The CSS class for the anchor, (*Default is `contents-anchor`*);
    - `heading`:
        - `style`: The CSS class for the anchor, (*Default is `header-anchor`*);
        - `notIncludeHeading`: Do not include header in link, (*Default is `false`*);

## Contributing

Pull requests and stars are highly welcome.
For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-toc-ext/issues/new).

