const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns 1 for Jason", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true })["Jason"], 1);
  });
  it("returns undefined for Karima", () => {
    assert.strictEqual(countOnly(firstNames, { "Karima": true })["Karima"], undefined);
  });
  it("returns 2 for Fang", () => {
    assert.strictEqual(countOnly(firstNames, { "Fang": true })["Fang"], 2);
  });
  it("returns 2 for Fang", () => {
    assert.strictEqual(countOnly(firstNames, { "Fang": true })["Fang"], 2);
  });
  it("returns undefined for Agouhanna", () => {
    assert.strictEqual(countOnly(firstNames, { "Agouhanna": false })["Agouhanna"], undefined);
  });

});
