#basic operation of linked lists are insert, find, and remove.

class Node
  attr_accessor :data, :next

  def initialize(data, next_node = nil)
    @data = data
    @next = next_node
  end
end

# the first node in a linked list (referred to as the head) identifies the list.
class List
  include Enumerable
  attr_accessor :head

  def each()
    item = @head
    while (item)
      yield item
      item = item.next
    end
  end

  def insert(data)
    @head = Node.new(data, head)
  end
end
