const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false if arrays are not equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns false if arrays are not equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns true if arrays are equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
});
