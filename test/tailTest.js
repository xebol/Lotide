const tail = require('../tail');
const assertEqual = require('../assertEqual');


const testcase = tail(["Coding", "Is", "Fun"]);
assertEqual(testcase.length, 2);
assertEqual(testcase[0], "Is");
assertEqual(testcase[1], "Fun");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// should fail the assertion
const result2 = tail(["Hello", "Lighthouse", "Labs"]); 
assertEqual(result2.length, 3);
assertEqual(result2[0], "Hello");
assertEqual(result2[1], "Lighthouse");
assertEqual(result2[2], "Labs");


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

 //An array with only one element should yield an empty array for its tail
const arr = tail(["Hello"]);
assertEqual(arr.length, 0);

//An empty array should yield an empty array for its tail
const empty = tail([]);
assertEqual(empty.length, 0);