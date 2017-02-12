/* globals hexo: true */

let assign = require('object-assign');
let Filter = require('./lib/Filter');
let Slugify = require('./lib/Slugify');
let filter = new Filter();
var config = hexo.config.toc || {};
hexo.config.toc = assign({}, config, { slugify: Slugify.load(config.slugify) });

hexo.extend.filter.register('before_post_render', filter.insert);
hexo.extend.filter.register('after_post_render', filter.heading);
