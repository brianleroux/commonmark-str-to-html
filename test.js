import test from 'tape'
import toHTML from './'

test('exists', (t) => {
  t.ok(test, 'test lib exists')
  t.end()
})

test('exists', (t) => {
  t.ok(toHTML, 'toHTML lib exists')
  t.end()
})

test('converts markdown to HTML', (t) => {
  t.equal(
    toHTML('Hello *world*'),
    '<p>Hello <em>world</em></p>\n',
    'spits out full-blown HTML'
  )

  t.end()
})
