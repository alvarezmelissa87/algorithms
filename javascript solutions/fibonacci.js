// class Sequences

//   def fib_sequence(limit)
//     base = [1, 2]
//     while (base.last < limit)
//       next_num = base[-1] + base[-2]
//       base << next_num
//     end
//     base.pop
//     base
//   end

//   def get_sum_evens(sequence)
//     evens = sequence.keep_if {|num| num % 2 == 0 }
//     evens.inject(:+)
//   end

// end

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
// [0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
//   return previousValue + currentValue;
// });
}
