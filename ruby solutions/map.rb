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



# Another way - calling it as a proc

class Array
  def map!(&code)                     # We are passing an ampersand argument called &code- this is our block
    self.each_with_index do |n, i|
      self[i] = code.call(n)          # Here we send call method to our block of code.
    end
  end
end


# OR (to see more clearly what a Proc is)
class Array
  def map!(code)
    self.each_with_index do |n, i|
      self[i] = code.call(n)
    end
  end
end

first_list = [1, 2, 3, 4]
second_list = [2, 3, 4, 5]

square = Proc.new {|n| n ** 2}

first_list.map!(sqare)
second_list.map!(square)

p first_list  # => [1, 4, 9, 16]
p second_list # => [4, 9, 16, 25]

# Now implemented with lambda

class Array
  def map!(code)
    self.each_with_index do |n, i|
      self[i] = code.call(n)
    end
  end
end

list = [1, 2, 3, 4]
list.map!(lambda {|n| n ** 2})
p list #=> [1, 4, 9, 16]

# Now with Method Objects

def square(n)   # Here we have a method that would work for the task at hand - we can reuse it as a
  n ** 2        # parameter by converting it into a Method object and passing it to our map! method.
end             # New object type will be Method

arr = [1, 2, 3, 4]
arr.map!(method(:square))
p arr # => [1, 4, 9, 16]








