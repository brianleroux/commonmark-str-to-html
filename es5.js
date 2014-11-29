"use strict";

var commonmark = require('commonmark')["default"];


var reader = new commonmark.DocParser();
var writer = new commonmark.HtmlRenderer();

exports["default"] = function (markdown) {
  return writer.render(reader.parse(markdown));
};

