//Binary Search Tree implementation

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function() {
  return this.data;
}

function BinarySearchTree() {
  this.root = null;              //set the root of the tree as null as a starting point
}

BinarySearchTree.prototype = {
  insert: function(data) {
    var node = new Node(data, null, null);
    if (this.root === null) {    // if the BST root is null then we can set the node as the root.
      this.root = node;
    } else {                   // if root is already set
      var current = this.root;  // set current to root of tree
      var parent;
      while (true) {
        parent = current;        //parent equals the root for now
        if (data < current.data) {   // if the data is less than the root data set current to current's left
          current = current.left;   // check if left child is empty/null if it is we set it to the node
          if (current === null) {   // passed in and break the loop
            parent.left = node;
            break;
          }
        } else {                        //if the data is greater than the root data we set current to
          current = current.right;     // current.right (right child)
          if (current === null) {     // we check if the right child is empty/null and if it is
            parent.right = node;      // we set the node as the right child of the parent (prev current)
            break;                    // and break the loop
          }
        }
      }
    }
  },

  inOrder: function(node) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  },

  preOrder: function(node) {
    if(!(node === null)) {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },

  postOrder: function(node) {
    if (!(node === null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  },

  getMin: function() {
    var current = this.root;
    while (!(current.left === null)) {
      current = current.left;
    }
    return current.data;
  },
}



var nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);
console.log("next line");
nums.preOrder(nums.root);
console.log("next line");
nums.postOrder(nums.root);
console.log("next line");
console.log(nums.getMin());
