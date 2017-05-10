# usps-states
[![Build Status](https://travis-ci.org/joonhocho/usps-states.svg?branch=master)](https://travis-ci.org/joonhocho/usps-states)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/usps-states/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/usps-states?branch=master)
[![npm version](https://badge.fury.io/js/usps-states.svg)](https://badge.fury.io/js/usps-states)
[![Dependency Status](https://david-dm.org/joonhocho/usps-states.svg)](https://david-dm.org/joonhocho/usps-states)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)


US State names and abbreviations / postal codes according to USPS

Data is from [usps.gov](http://pe.usps.gov/text/pub28/28apb.htm).


### Install
```
npm install --save usps-states
```


### Usage
```javascript
import {
  data,
  byName,
  byAbbr,
} from 'usps-states';

// data with the following format:
[
  {name: 'Alabama', abbr: 'AL'},
  {name: 'Alaska', abbr: 'AK'},
  ...
]

// byName with the following format:
{
  Alabama: {name: 'Alabama', abbr: 'AL'},
  ...
}

// byAbbr with the following format:
{
  AL: {name: 'Alabama', abbr: 'AL'},
  ...
}
```


### License
```
MIT License

Copyright (c) 2017 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
