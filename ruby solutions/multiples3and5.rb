
def sum_multiples(limit)
  sum = 0
  counter = 0

  until (counter == limit) do
    if (counter % 5 == 0 || counter % 3 == 0)
      sum += counter
    end
    counter += 1
  end
  sum

end

 p sum_multiples(10) == 23