const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Is', 'Fun'] for ['Coding', 'Is', 'Fun']", () => {
    assert.deepEqual(tail(["Coding", "Is", "Fun"]), ["Is", "Fun"]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns an [] for its tail if passed an array with one element", () => {
    assert.deepEqual(tail(["X"]), []);
  });

  it("returns an empty array for its tail if passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
