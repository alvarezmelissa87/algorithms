class Sequences

  def fib_sequence(limit)
    base = [1, 2]
    while (base.last < limit)
      next_num = base[-1] + base[-2]
      base << next_num
    end
    base.pop
    base
  end

  def get_sum_evens(sequence)
    evens = sequence.keep_if {|num| num % 2 == 0 }
    evens.inject(:+)
  end

end


# Driver Code
# p (get_sum_evens(fib_sequence(4000000)) == 4613732) #=> true
