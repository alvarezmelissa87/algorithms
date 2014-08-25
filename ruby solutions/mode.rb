def mode(list)
  frequency = {}
  list.each do |num|
    frequency.has_key?(num) ? frequency[num] += 1 : frequency[num] = 1
  end

  frequency.each do |k,v|
    puts k if frequency[k] == frequency.values.max
  end

end

numbers = [1, 2, 2, 3, 3, 3, 3]
list = [4, 4, 6, 6, 2, 2, 2, 2, 2, 1]
more_nums = [1, 1, 2, 2]
mode(numbers) #=> 3
mode(list) #=> 2
mode(more_nums)
