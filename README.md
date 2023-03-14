# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xebollotide`

**Require it:**

`const _ = require('@xebol/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Head function takes in an array as a parameter and only returns the first index
* `tail(...)`: Tail function takes in an array as a parameter and returns the entire index of the parameter except for the first index
* `middle(...)`: Middle function takes in an array as a parameter and returns the middle index or most middle indexes 
* assertEqual`(...)`: Assert Equal function compares the actual output and expected output and prints appropriate message whether the input matches the output or not.
* assertArraysEqual`(...)`: Assert Arrays Equal checks if two arrays are equal or not and prints a message accordingly.
* `(...)`: description