# If array isn't empty, compare adjacent elements in array
# if the element on the right is larger, swap the elements
# continue to do this until there are no more elements swapped
# return the sorted array

def bubble_sort(list)
  return list if list.size <= 1 #only one element or less so already sorted
  swapped = true
  while swapped do
    swapped = false
    0.upto(list.size - 2) do |i|
      if list[i] > list[i + 1]
        list[i], list[i + 1] = list[i + 1], list[i]  # swap them if left is > right
        swapped = true
      end
    end
  end
  list
end

unsorted = [3, 1, 7, 2, 5]
unsorted2 = [10, 3, 2, 35, 23, 6, 5]
p bubble_sort(unsorted) # => [1, 2, 3, 5, 7]
p bubble_sort(unsorted2) #=> [2, 3, 5, 6, 10, 23, 35]
