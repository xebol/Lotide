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

const without = function(source, itemsToRemove) {
  let arrayResult = [];
  for (let i = 0; i < source.length; i++) {
    let isMatch = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isMatch = true;
      } 
    }
    if (!isMatch) {
      arrayResult.push(source[i]);
    }
  }
  return arrayResult;
};

const result1 = without([1, 2, 3], [1]); // => [2, 3]
console.log(result1);

const result2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(result2);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);