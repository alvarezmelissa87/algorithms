function factorial(number) {
  var result = 1;
  for (var i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

factorial(10)
factorial(2)
