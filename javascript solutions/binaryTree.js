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

  getMax: function() {
    var current = this.root;
    while (!(current.right === null)) {
      current = current.right;
    }
    return current.data;
  },

  find: function(data) {
    var current = this.root;
    while (data != current.data && current.left != null && current.right != null) {
      if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if (current.data === data) {
      return current;
    } else {
      return "-1";
    }
  },

  remove: function(value){
        var found       = false,
            parent      = null,
            current     = this.root,
            childCount,
            replacement,
            replacementParent;

        while(!found && current){
            if (value < current.value){
                parent = current;
                current = current.left;
            } else if (value > current.value){
                parent = current;
                current = current.right;
            } else {
                found = true;
            }
        }

        if (found){
            childCount = (current.left !== null ? 1 : 0) +
                         (current.right !== null ? 1 : 0);
            if (current === this._root){
                switch(childCount){
                    case 0:
                        this._root = null;
                        break;
                    case 1:
                        this._root = (current.right === null ?
                                      current.left : current.right);
                        break;
                    case 2:
                    //need to do

                }
            } else {
                switch (childCount){
                    case 0:
                        if (current.value < parent.value){
                            parent.left = null;
                        } else {
                            parent.right = null;
                        }
                        break;
                    case 1:
                        if (current.value < parent.value){
                            parent.left = (current.left === null ?
                                           current.right : current.left);
                        } else {
                            parent.right = (current.left === null ?
                                            current.right : current.left);
                        }
                        break;
                    case 2:
                        //TODO
                }

            } //ends else of if(found)

        } // ends if(found)

  },// end remove function

};

  // remove: function(data) {
  //    var root = this.removeNode(this.root, data);
  // },

  // removeNode: function(node, data) {
  //   if (node === null) {
  //     return null;
  //   }
  //   if (data === node.data) {
  //     //node has no children
  //     if (node.left === null & node.right === null) {
  //       return null;
  //     }
  //     //node has no left child
  //     if (node.left === null) {
  //       return node.right;
  //     }
  //     //node has no right child
  //     if (node.right === null) {
  //       return node.left;
  //     }
  //     //node has two children
  //     var tempNode = getSmallest(node.right);
  //     node.data = tempNode.data;
  //     node.right = this.removeNode(node.right, tempNode.data);
  //     return node;
  //   } else if (data < node.data) {
  //     node.left = this.removeNode(node.left, data);
  //     return node;
  //   } else {
  //     node.right = this.removeNode(node.right, data);
  //     return node;
  //   }
  // }
}

/*
         (23)
         /  \
     (16)    (45)
     / \      / \
  (3)  (22)(37) (99)

*/


var tree = new BinarySearchTree();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);
// console.log("Inorder traversal: ");
// tree.inOrder(tree.root);
// console.log("next line");
// tree.preOrder(tree.root);
// console.log("next line");
// tree.postOrder(tree.root);
// console.log("next line");
// console.log(tree.getMin());
// console.log("next line");
// console.log(tree.getMax());
console.log(tree.find(22));
console.log(tree.find(99));
console.log(tree.find(23));
// tree.remove(99);
console.log(tree.find(23));

/*
         (23)
         /  \
     (16)    (45)
     / \      / \
  (3)  (22)(37) (99)

*/



