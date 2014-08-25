def mode(list)
  frequency = {}
  list.each do |num|
    frequency.has_key? ? frequency[num] += 1 : frequency[num] = 1
  end
  p frequency
  p frequency.values.max
end

numbers = [1, 2, 2, 3, 3, 3, 3]
