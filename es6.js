const commonmark = require('commonmark')

let reader = new commonmark.Parser()
let writer = new commonmark.HtmlRenderer()

export default (markdown) => writer.render(reader.parse(markdown))
