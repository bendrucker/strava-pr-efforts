# strava-pr-efforts [![Build Status](https://travis-ci.org/bendrucker/strava-pr-efforts.svg?branch=master)](https://travis-ci.org/bendrucker/strava-pr-efforts) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/strava-pr-efforts.svg)](https://greenkeeper.io/)

> Transform stream that filters PRs 


## Install

```
$ npm install --save strava-pr-efforts
```


## Usage

```js
var prs = require('strava-pr-efforts')

fs.createReadStream('efforts.ndjson')
  .pipe(ndjson.parse())
  .pipe(prs())
  .pipe(ndjson.stringify())
  .pipe(process.stdout)
```

```sh
cat efforts.ndjson | strava-pr-efforts
```

## API

#### `prs([options])` -> `stream.Transform`

##### options

###### rank

Type: `number`  
Default: `1`

The minimum rank to filter. By default, only true PRs (rank of 1) will be passed along. 


## License

MIT © [Ben Drucker](http://bendrucker.me)
