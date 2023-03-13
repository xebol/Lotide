const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5, 6, 7]), 5);//assertion pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //assertion pass
assertEqual(head([2]), 2); //assertion pass
assertEqual(head([]), 4); // assertion fails