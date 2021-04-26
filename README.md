[js-attr](http://make-github-pseudonymous-again.github.io/js-attr)
==

Attribute code bricks for JavaScript.

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-attr/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-attr.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-attr)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-attr.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-attr)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-attr)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-attr)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-attr#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-attr#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-attr)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-attr.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-attr)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-attr.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-attr/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-attr.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-attr)

## Installation

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let attr = require( "@aureooms/js-attr" ) ;
```

## Usage

```js
( "abcd" )[attr.len] ; // 4

( new Array( 17 ) )[attr.len] ; // 17

Object.keys( { a : 0 , b : 0 , c : 0 } )[attr.len] ; // 3

( function ( a , b ) { return a + b ; } )[attr.len] ; // 2
```
