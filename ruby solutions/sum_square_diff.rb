# The sum of the squares of the first ten natural numbers is,

# 12 + 22 + ... + 102 = 385
# The square of the sum of the first ten natural numbers is,

# (1 + 2 + ... + 10)2 = 552 = 3025
# Hence the difference between the sum of the squares of the
# first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

# Find the difference between the sum of the squares of the first one hundred
# natural numbers and the square of the sum.

# should return the sum of the squares of the first 100 numbers
def sum_squares(num)
  if num == 1
    1
  else
    num**2 + sum_squares(num - 1)
  end
end

# should return the square of the sum of the first 100 numbers
def square_of_sum(num)
  total = 0
  until (num < 1) do
    puts num
    total += num
    num -= 1
  end
  total**2
end

# should return the difference between sum_squares and square_of_sum
def diff_sum_square(num, other_num)

end

puts (sum_squares(10) == 385) # should return true
puts square_of_sum(10) # should return true
