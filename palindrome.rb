def large_palindrome
  x = 999
  palindromes = []

  while x > 1
    y = 999
    while y > 1
      if ((x * y).to_s == (x * y).to_s.reverse)
        palindromes << x * y
        break
      end
      y -= 1
    end
    x -= 1
  end

  palindromes.max

end

p large_palindrome
