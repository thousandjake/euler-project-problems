var multipleFinder = function (number) {
  var resultsArray = [];
  for(var i=3;i<number;i++){
    if(i%3===0 || i%5===0){
      resultsArray.push(i);
    };
  };
  return resultsArray
};

var problemSolver = function (number) {
  return multipleFinder(number).reduce(function (previousValue,currentValue) {
    return previousValue+currentValue;
  });
};
