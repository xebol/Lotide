const eqObjects = function(object1, object2) {
  //comparing length of the keys in objects
const object1Length = Object.keys(object1).length
const object2Length = Object.keys(object2).length

if(object1Length !== object2Length) {
  return false;
}
  for (let key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const arrayCheck = eqArrays(object1[key], object2[key])
    
    if(!arrayCheck) {
      return false;
    }
    }
    //comparing the values of keys
    else if (object1[key] !== object2[key]) {
      return false
    } 
  }
  return true;
};


module.exports = eqObjects;