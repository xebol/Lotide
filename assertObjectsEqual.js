const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function(object1, object2) {
  //comparing length of the keys in objects
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;

  if (object1Length !== object2Length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const arrayCheck = eqArrays(object1[key], object2[key]);

      if (!arrayCheck) {
        return false;
      }
    }
    //comparing the values of keys
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
 const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" });
assertObjectsEqual({ paint: "red", size: "medium" }, { size: "medium", color: "red" });
