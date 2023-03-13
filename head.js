const assertEqual = require('./assertEqual');

const head = function(array) {
  for (let index of array) {
    return array[0];
  }
};


module.exports = head;