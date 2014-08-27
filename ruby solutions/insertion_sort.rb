# Insertion Sort, like Bubble Sort, has O(n^2) worst and average performance. It
# provides several advantages over Bubble Sort, however. For example, it is in-place
# (meaning it only requires a constant amount of additional memory space), and stable
# (meaning it does not change the relative order of elements with equal keys).
# A cool property that Insertion Sort has is that after i iterations, the first i
# elements of the list are guaranteed to be sorted. Another cool (and important)
# fact about Insertion Sort is that it is on-line (meaning that it can sort a list
# as it receives it). This could be useful when dealing with data coming from a network.
# The negatives of Insertion Sort is that it is only efficient for small data sets,
# and its performance complexity flaws when compared to other algorithms such as
# Heap Sort and Merge Sort.

def insertion_sort(list)
  for i in 1..list.length - 1
    value = list[i]
    j = i - 1
    while (j >= 0 && (list[j] > value)) do
      list[j], list[j + 1] = list[j + 1], list[j]
      j -= 1
    end
    list[j + 1] = value
  end
  list
end


unsorted = [4, 2, 8, 3, 1]
p insertion_sort(unsorted) #=> [1, 2, 3, 4, 8]






