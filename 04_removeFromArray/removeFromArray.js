const removeFromArray = function (arr, ...removedElements) {
  return arr.filter(item => !removedElements.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
