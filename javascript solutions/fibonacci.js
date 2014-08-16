

var fibSequence = function(limit) {
  var base = [1, 2];
  while (base.length < limit) {
    var next = base[base.length - 1] + base[base.length - 2];
    base.push(next);
  }

  console.log(base);
  return base;
}

var getSumEvens = function(sequence) {
  var result = [];
  var sum = 0;

  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] % 2 === 0) {
      result.push(sequence[i]);
    }
  }

  for (var j = 0; j < result.length; j++) {
    sum += result[j];
  }
  console.log(result);
  console.log(sum);
  return sum
}


var mySequence = fibSequence(10);
getSumEvens(mySequence);

var otherSeq = fibSequence(50);
getSumEvens(otherSeq);

