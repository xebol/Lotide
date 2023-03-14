const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {
  it("returns an object of how many times a letter appears in a string", () => {
    assert.deepEqual(letterPositions("abadakedavra"), {
      a: [0, 2, 4, 8, 11],
      b: [1],
      d: [3, 7],
      k: [5],
      e: [6],
      v: [9],
      r: [10]
    });
  });

  it("returns an object of how many times a letter appears in a string", () => {
    assert.deepEqual(letterPositions("abadakedavra"), {
      a: [0, 2, 4, 8, 11],
      b: [1],
      d: [3, 7],
      k: [5],
      e: [6],
      v: [9],
      r: [10]
    });
  });

  it("returns an object of how many times a letter appears in a string", () => {
    assert.deepEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] 
    });
  })
});
