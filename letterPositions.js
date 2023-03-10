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

const letterPositions = function(sentence) {
  const result = {};

  //loop through the string 
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") //filter out the space
      //check if the characted already exist in the result object
      if (result[sentence[i]]) {
        //if character exist, push it to the array
        result[sentence[i]].push(i);
      } else {
        //if it does not exist currently, add the key to the object and assign value to the current index
        result[sentence[i]] = [i];
      }
  }
  return result;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("abadakedavra"));
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("lighthouse in the house"), {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
});

assertArraysEqual(letterPositions("abadakedavra"), {
  a: [0, 2, 4, 8, 11],
  b: [1],
  d: [3, 7],
  k: [5],
  e: [6],
  v: [9],
  r: [10]
});

assertArraysEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });