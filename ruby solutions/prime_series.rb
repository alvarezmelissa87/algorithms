require 'prime'

def get_prime(n)
  Prime.first(n).last
end

puts (get_prime(10) == 29) #=> true
p get_prime(10001) #104743
