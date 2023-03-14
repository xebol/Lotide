const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("eqObjects", () => {
  it("returns true if objects are equal", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });

  it("returns false if objects are not equal", () => {
    assert.deepEqual(eqObjects({ size: "medium", color: "red", sleeveLength: "long" }, { size: "medium", color: "red" }), false);
  });

});
