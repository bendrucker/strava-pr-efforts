'use strict'

var Transform = require('stream').Transform

module.exports = PrStream

function PrStream (options) {
  options = options || {}
  var rank = options.rank || 1

  return new Transform({
    objectMode: true,
    transform: function transform (chunk, enc, callback) {
      var actual = chunk.pr_rank
      if (!actual || actual > rank) return callback()
      callback(null, chunk)
    }
  })
}
