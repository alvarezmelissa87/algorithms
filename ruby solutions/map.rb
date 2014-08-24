# Implementing map method

class Array
  def map!
    self.each_with_index do |n, i|
      self[i] = yield(n)
    end
  end
end

# 1. Send map! to an Array of numbers
# 2. When yield is called with the number n(first time 1, second time 2, etc),
#     pass the number to the block of code given.
# 3. The block has the number available (also called n) and squares it. As it is the
#     last value handled by the block, it is returned automatically.
# 4. Yield outputs the value returned by the block and rewrites the value in the array.
# 5. This continues for each element in the array.
