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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.ceil(array.length / 2 - 1)]];
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]
console.log(middle([1, 2])); // => []
console.log(middle([])); // => []
console.log(middle(["middle"])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle(["Hello", "Lighthouse", "Labs"])); // => ["Lighthouse"]

let result1 = assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);// => [3, 4]
let result2 = assertArraysEqual(middle([1, 2]), []); // => []
let result3 = assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);