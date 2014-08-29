my_array = IO.readlines(ARGV[0])

def fizzbuzz(a, b, n)
  a = a.to_i
  b = b.to_i
  n = n.to_i

   for i in (1..n).to_a do
    if i % (a * b) == 0
      print "FB\s"
    elsif i % b == 0
      print "B\s"
    elsif i % a == 0
      print "A\s"
    else
      print i.to_s + "\s"
    end
  end
end
