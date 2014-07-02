var palindrome = function() {
  var palindromes = [];
  var x = 999;
  while (x > 1) {
    var y = 999;
    while (y > 1) {
      if ((x * y).toString().split('').reverse().join('') === (x * y).toString()) {
        palindromes.push(x * y)
      }
      y--
    }
    x--
  }
  return Math.max.apply(Math, palindromes);
}

console.log(palindrome());
