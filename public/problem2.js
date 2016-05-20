var findFibonacci = function (input) {
  var results = [];
  if (input===0) {
    return results;
  } else if (input===1) {
    results = [1];
    return results;
  } else {
    results = [1,2];
    for(var i=2;i<input;i++){
      results[i]=results[i-1]+results[i-2];
    };
    return results;
  }
};

var findEvens = function (inputArray) {
  var outputArray = inputArray.filter(function (currentElement) {
    if(currentElement%2===0) {
      return currentElement;
    }
  });
  return outputArray;
};

var solveEuler = function () {
  var solution = findEvens(findFibonacci(32)).reduce(function (a,b) {
    return a+b
  });
  return solution;
};
