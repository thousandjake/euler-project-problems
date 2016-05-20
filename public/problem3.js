var g = function (x, n) {
  return (Math.pow(x,2)+1)%n;
};

var gcd = function (a, b) {
  var remainder;
  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};

var rho = function (input) {
  var x=2, y=2, d=1;
  if(input !== 1) {
    while (d === 1) {
      x = g(x, input);
      y = g(g(y, input), input);
      d = gcd(Math.abs((x-y)), input)
    };
  };
  if(d === input) {
    return 1;
  } else {
    return d;
  }
};

var euler3 = function (input) {
  var x = 1, factor = input;
  x = rho(input/x);
  while(x !== 1) {
    factor = factor/x;
    x = rho(factor);
  }
  if(Math.sqrt(factor)%1===0) {
    return Math.sqrt(factor);
  } else {
    return factor;
  }
};
