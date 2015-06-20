var facts = require('./index')
var isString = require('is-string')
var test = require('tape')

test('get a fact', function (t) {
  t.plan(1)
  t.ok(isString(facts()), 'should return a string')
})
