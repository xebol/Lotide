const assertArraysEqual = require('./assertArraysEqual');
const letterPositions = function(sentence) {
  const result = {};

  //loop through the string 
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") //filter out the space
      //check if the character already exist in the result object
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


module.exports = letterPositions;