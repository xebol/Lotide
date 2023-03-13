const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);// pass
assertArraysEqual(middle([1, 2]), []); // pass
assertArraysEqual(middle([]), []); // pass
assertArraysEqual(middle(["middle"]), []); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [3,4,5]); // fail
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Labs"]); // fail
