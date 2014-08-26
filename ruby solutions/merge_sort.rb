def merge_sort(a)
  return a if a.size <= 1
  l, r = split_list(a)  # =>  l = [3, 7, 5]  r = [10, 4, 6]
  # result = combine(merge_sort(l), merge_sort(r))
end

def split_list(a)
  mid = (a.size / 2).round
  [a.take(mid), a.drop(mid)]
end

def combine(a, b)

end

unsorted = [3, 7, 5, 10, 4, 6]
merge_sort(unsorted)
