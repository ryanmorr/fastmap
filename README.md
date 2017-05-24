# fastmap

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![Dependencies][dependencies-image]][project-url]
[![License][license-image]][license-url]
[![File Size][file-size-image]][project-url]

> Accelerated hash maps

Creates an efficient key/value store by instantiating a constructor function with an empty prototype. This is much faster than using either an object literal (`{}`) or a "bare" empty object (`Object.create(null)`), making it the superior alternative for hash maps in memory intensive tasks. Full credit to [Node.js](https://github.com/nodejs/node/blob/983775d457a8022c271488a9eaac56caf8944aed/lib/events.js#L5) for the technique.

## Usage

Use just like an object literal:

``` javascript
const map = fastmap();

map.foo = 1;
map.bar = 2;

console.log({}.toString.call(map)); // [object Object]

console.log(JSON.stringify(map)); // {"foo":1,"bar":2}
```

Unlike object literals, the object is empty:

``` javascript
console.log('toString' in {}); // true
console.log('toString' in fastmap()); // false

for (const key in map) {
    // `hasOwnProperty` check is unnecessary
}
```

Provide objects as arguments to pre-populate the map:

``` javascript
const map = fastmap({foo: 1}, {bar: 2}, {foo: 10, baz: 3});

console.log(map.foo) // 10
console.log(map.bar) // 2
console.log(map.baz) // 3
```

## Installation

Fastmap is [CommonJS](http://www.commonjs.org/) and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) compatible with no dependencies. You can download the [development](http://github.com/ryanmorr/fastmap/raw/master/dist/fastmap.js) or [minified](http://github.com/ryanmorr/fastmap/raw/master/dist/fastmap.min.js) version, or install it in one of the following ways:

``` sh
npm install ryanmorr/fastmap

bower install ryanmorr/fastmap
```

## Tests

Run unit tests in the command line by issuing the following commands:

``` sh
npm install
npm install -g gulp
gulp test
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/fastmap
[version-image]: https://badge.fury.io/gh/ryanmorr%2Ffastmap.svg
[build-url]: https://travis-ci.org/ryanmorr/fastmap
[build-image]: https://travis-ci.org/ryanmorr/fastmap.svg
[dependencies-image]: https://david-dm.org/ryanmorr/fastmap.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE
[file-size-image]: https://badge-size.herokuapp.com/ryanmorr/fastmap/master/dist/fastmap.min.js.svg?color=blue&label=file%20size