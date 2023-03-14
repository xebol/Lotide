const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findByKeyValue", () => {
  it("returns drama for 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
