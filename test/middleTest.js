const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns ['2, 3'] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['2, 3'] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns an empty array if passed an array with two elements", () => {
    assert.deepEqual(middle([1, 2]), [])
  })

  it("returns an empty array is passed an empty arra", () => {
    assert.deepEqual(middle([]), [])
  })

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
});
