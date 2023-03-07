const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Light", "Light");
assertEqual(1, "1");