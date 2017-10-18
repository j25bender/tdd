function populateRandomArray (lowerLimit, upperLimit, arraySize) {
  var resultArray = [];
  for (var i = 0 ; i < arraySize; i++){
    var random = Math.floor(Math.random() * ( upperLimit - lowerLimit ) + lowerLimit);
    resultArray.push(random);
  }
  return resultArray;
}

function sortCheck (sortedArray) {
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] <= sortedArray[i + 1]) {
            return true;
        } else {
            return false;
        }
    }
}

export { populateRandomArray, sortCheck } 