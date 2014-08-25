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

  def insert_sorted(data)
    if(!@head || data <= @head.data)
      return insert(data)
    end
    current = @head
    while(current.next && current.next.data < data)
      current = current.next
    end
    current.next = Node.new(data, current.next)
  end

  #Search in a linkedlist is a linear time operation
  def find_value(value)
    return find() do |item|  # find is an enumerable that takes a block - passes each entry in enum to block
      item.data == value     #  and returns the first for which block is NOT false. So here we say return what we
    end                      # the first item of which the data matches the value
  end

  #removal of data from a linked-list takes a reference to a node as an identifier.
  # boundary cases- removal of head or tail
  def remove(target)
    @head = @head.next if @head == target
    prev = find() do |item|
      item.next == target
    end
    prev.next = prev.next.next if prev
  end
end









