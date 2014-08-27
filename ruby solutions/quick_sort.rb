
 def quicksort a
  (pivot = a.pop) ? quicksort(a.select{|i| i <= pivot}) + [pivot] + quicksort(a.select{|i| i > pivot}) : []
 end

 def qsort(list)
  return [] if list.size == 0
  x, *xs = *list
  p x
  less, more = xs.partition{|y| y < x}
  qsort(less) + [x] + qsort(more)
 end

unsorted = [2, 7, 15, 1, 3, 11]
p quicksort(unsorted)
p qsort(unsorted)





