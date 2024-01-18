# fastmap

[![Version Badge][version-image]][project-url]
[![License][license-image]][license-url]
[![Build Status][build-image]][build-url]

> Accelerated hash maps

## Description

Creates an efficient key/value store by instantiating a constructor function with an empty prototype. This is [faster](https://jsperf.app/fulufa/2) than using `Object.create(null)` to create "bare" objects, [particularly in V8](https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62), making it the superior alternative for hash maps in memory intensive tasks. Full credit to [Node.js](https://github.com/nodejs/node/blob/983775d457a8022c271488a9eaac56caf8944aed/lib/events.js#L5) for the technique.

## Install

Download the [CJS](https://github.com/ryanmorr/fastmap/raw/master/dist/cjs/fastmap.js), [ESM](https://github.com/ryanmorr/fastmap/raw/master/dist/esm/fastmap.js), [UMD](https://github.com/ryanmorr/fastmap/raw/master/dist/umd/fastmap.js) versions or install via NPM:

``` sh
npm install @ryanmorr/fastmap
```

## Usage

Use just like an object literal:

``` javascript
import fastmap from '@ryanmorr/fastmap';

const map = fastmap();

map.foo = 1;
map.bar = 2;

{}.toString.call(map); //=> "[object Object]"
JSON.stringify(map); //=> "{\"foo\":1,\"bar\":2}"
```

Unlike object literals, the object is empty:

``` javascript
'toString' in {}; //=> true
'toString' in fastmap(); //=> false

for (const key in map) {
    // `hasOwnProperty` check is unnecessary
}
```

Provide an object to pre-populate the map:

``` javascript
const map = fastmap(foo: 1, bar: 2, baz: 3});

map.foo; //=> 1
map.bar; //=> 2
map.baz; //=> 3
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/fastmap
[version-image]: https://img.shields.io/github/package-json/v/ryanmorr/fastmap?color=blue&style=flat-square
[build-url]: https://github.com/ryanmorr/fastmap/actions
[build-image]: https://img.shields.io/github/actions/workflow/status/ryanmorr/fastmap/node.js.yml?style=flat-square
[license-image]: https://img.shields.io/github/license/ryanmorr/fastmap?color=blue&style=flat-square
[license-url]: UNLICENSE