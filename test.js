'use strict'

var test = require('tape')
var concat = require('concat-stream')
var toStream = require('from2-array')
var prs = require('./')

test('actual prs', function (t) {
  t.plan(1)

  toStream.obj([
    { id: 123, pr_rank: 2 },
    { id: 456, pr_rank: 1 },
    { id: 789, pr_rank: null }
  ])
    .pipe(prs())
    .pipe(concat(function (data) {
      t.deepEqual(data, [{
        id: 456,
        pr_rank: 1
      }])
    }))
})

test('custom rank', function (t) {
  t.plan(1)

  toStream.obj([
    { id: 123, pr_rank: 2 },
    { id: 456, pr_rank: 1 },
    { id: 789, pr_rank: null }
  ])
    .pipe(prs({ rank: 2 }))
    .pipe(concat(function (data) {
      t.deepEqual(data.map(row => row.id), [
        123,
        456
      ])
    }))
})
