require 'prime'

def prime_nums(number)
  primes = [number]
  Prime.each(10000) do |prime|
    if (primes.last % prime == 0)
      n = primes.pop/prime
      primes << prime
      primes << n
    else
      primes
    end
  end
  primes
end

# Get the prime numbers from each of the numbers starting with the limit and
# decrementing down by one. Pull out the prime factors used most and multiply
# together to get smallest multiple.

def generate_multiples(number)
  multiples = []
  counter = 0
  until counter == 1000
    multiples << number * counter
  end
  multiples
end

def generate_factors(limit)
  factors = []
  until limit == 1 do
    factors << limit
    limit -= 1
  end
  factors
end

def smallest_multiple(limit)
  # multiples = generate_multiples(limit)
  factors = generate_factors(limit)
  factors.map do |factor|
    prime_nums(factor)
  end

end
