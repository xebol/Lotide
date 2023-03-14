const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]])
      if (results[allItems[i]]) {
        results[allItems[i]] += 1;
      } else {
        results[allItems[i]] = 1;
      }
  }
  return results;
};


module.exports = countOnly;