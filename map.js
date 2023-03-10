const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  //call eqArrays function in the assertArraysEqual function
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); //word is the callback function
console.log(results1);

const car = ["toyota", "mazda", "honda"];
const results2 = map(car, cars => cars.length);
console.log(results2);

const school = ["Lighthouse", "Labs", "Coding", "Bootcamp"];
const results3 = map(school, bootcamp => bootcamp);
console.log(results3);

assertArraysEqual(map(school, bootcamp => bootcamp), ["Lighthouse", "Labs", "Coding", "Bootcamp"]);
assertArraysEqual(map(car, cars => cars.length), [6, 5, 5]);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
