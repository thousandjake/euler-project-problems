var palindromic = function (input) {
  var inputString = input.toString();
  console.log(inputString);
  var inputLength = inputString.length;
  console.log(inputLength);
  var inputArray = [], reverseArray = [];
  for(var i = 0; i < inputLength; i++) {
    inputArray.unshift(inputString.charAt(i));
    reverseArray.push(inputString.charAt(i));
  }
  console.log(inputArray);
  console.log(reverseArray);
  if(inputArray === reverseArray) {
    return true; 
  }
  return false;
};
