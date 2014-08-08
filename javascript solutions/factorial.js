function factorial(number) {
  var result = 1;
  for (var i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(10) === 3628800) // should return true
console.log(factorial(2) === 2) // should return true
