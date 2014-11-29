import commonmark from 'commonmark'

let reader = new commonmark.DocParser()
let writer = new commonmark.HtmlRenderer()

export default (markdown) => writer.render(reader.parse(markdown))

