

var fibSequence = function(limit) {
  var base = [1, 2];
  while (base[base.length - 1] < limit) {
    var next = base[(-1)] + base[(-2)];
    base.push(next);
  }
  base.pop();
  return base;
}

var getSumEvens = function(sequence) {
  var result = [];
  var i;
  for (i = 0; i < sequence.length; ++i) {
    if (sequence[i] % 2 === 0) {
      result.push(sequence[i]);
    }
  }

  result = result.reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
  });

  return result;
}
