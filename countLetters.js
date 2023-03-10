const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};

  for (let letter of string) {
    if(letter !== " ")//filter out the space
      if (result[letter]) {
        result[letter] += 1; //increment couter for each letter
      } else {
        result[letter] = 1; //
      }
  }
  return result;
};



console.log(countLetters("lighthouse in the house"));

const lettersUsed = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertEqual(lettersUsed["l"], 1);
assertEqual(lettersUsed["h"], 4);
assertEqual(lettersUsed["e"], 3);