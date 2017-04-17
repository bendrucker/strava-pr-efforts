#!/usr/bin/env node

'use strict'

var meow = require('meow')
var ndjson = require('ndjson')
var prs = require('./')

var cli = meow(`
  Usage
    $ cat efforts.ndjson | strava-pr-efforts
`)

process.stdin
  .pipe(ndjson.parse())
  .pipe(prs(cli.flags))
  .pipe(ndjson.stringify())
  .pipe(process.stdout)
