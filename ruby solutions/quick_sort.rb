# def quicksort(array, from=0, to=nil)
#     if to == nil             # Sort the whole array, by default
#         to = array.size - 1
#     end

#     if from >= to            # Done sorting
#         return
#     end

#     # Take a pivot value, at the far left
#     pivot = array[from]

#     # Min and Max pointers
#     min = from
#     max = to

#     # Current free slot
#     free = min

#     while min < max
#         if free == min # Evaluate array[max]
#             if array[max] <= pivot # Smaller than pivot, must move
#                 array[free] = array[max]
#                 min += 1
#                 free = max
#             else
#                 max -= 1
#             end
#         elsif free == max # Evaluate array[min]
#             if array[min] >= pivot # Bigger than pivot, must move
#                 array[free] = array[min]
#                 max -= 1
#                 free = min
#             else
#                 min += 1
#             end
#         else
#             raise "Inconsistent state"
#         end
#     end

#     array[free] = pivot

#     quicksort array, from, free - 1
#     quicksort array, free + 1, to
# end

 def quicksort a
  (pivot = a.pop) ? quicksort(a.select{|i| i <= pivot}) + [pivot] + quicksort(a.select{|i| i > pivot}) : []
 end

 def qsort(list)
  return [] if list.size == 0
  x, *xs = *list
  less, more = xs.partition{|y| y < x}
  qsort(less) + [x] + qsort(more)
 end

unsorted = [2, 7, 15, 1, 3, 11]
p quicksort(unsorted)
p qsort(unsorted)





