"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var commonmark = _interopRequire(require('commonmark'));

var reader = new commonmark.DocParser();
var writer = new commonmark.HtmlRenderer();

module.exports = function (markdown) {
  return writer.render(reader.parse(markdown));
};

