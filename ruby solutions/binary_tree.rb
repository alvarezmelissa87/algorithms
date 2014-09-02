class TreeNode
  attr_accessor :value, :left, :right

  def initialize(val, left, right)
    @value = val
    @left = left
    @right = right
  end
end

class BinarySearchTree
  def initialize(val)
    puts "Initializing with: " + val.to_S
    @root = TreeNode.new(val, nil, nil)
  end

  def insert(val)
    puts "Inserting :" + value.to_S
    current_node = @root
    while current_node != nil
      if value < current_node.value && current_node.left == nil
        current_node.left = TreeNode.new(value, nil, nil)
      elsif value > current_node.value && current_node.right == nil
        current_node.right = TreeNode.new(value, nil, nil)
      elsif value < current_node.value
        current_node = current_node.left
      elsif value > current_node.value
        current_node = current_node.right
      else
        return
      end
    end
  end
end