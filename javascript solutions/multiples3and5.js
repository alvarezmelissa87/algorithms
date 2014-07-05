var sum_multiples = function(limit) {
  var sum = 0;
  var counter = 0;
  for (var i = 0; i < limit; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
      sum += i
    }
  }
  return sum;
}


console.log(sum_multiples(10))
