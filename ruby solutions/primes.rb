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

p prime_nums(10)
p prime_nums(15)
p prime_nums(115)
p prime_nums(125)
p prime_nums(147)
p prime_nums(13195)
p prime_nums(600851475143).max

