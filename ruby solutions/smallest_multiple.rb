
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
  multiples = generate_multiples(limit)
  factors = generate_factors(limit)

  multiples.each do |multiple|
    number = limit
    until number == 1 do
      if multiple % limit == 0
        number -=1
      end
    end
  end
end
