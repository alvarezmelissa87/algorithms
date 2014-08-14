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
            current     = this._root,
            childCount,
            replacement,
            replacementParent;

        //make sure there's a node to search
        while(!found && current){

            //if the value is less than the current node's, go left
            if (value < current.value){
                parent = current;
                current = current.left;

            //if the value is greater than the current node's, go right
            } else if (value > current.value){
                parent = current;
                current = current.right;

            //values are equal, found it!
            } else {
                found = true;
            }
        }

        //only proceed if the node was found
        if (found){
            //figure out how many children
            childCount = (current.left !== null ? 1 : 0) +
                         (current.right !== null ? 1 : 0);

            //special case: the value is at the root
            if (current === this._root){
                switch(childCount){

                    //no children, just erase the root
                    case 0:
                        this._root = null;
                        break;

                    //one child, use one as the root
                    case 1:
                        this._root = (current.right === null ?
                                      current.left : current.right);
                        break;

                    //two children, little work to do
                    case 2:
 //new root will be the old root's left child
                        //...maybe
                        replacement = this._root.left;

                        //find the right-most leaf node to be
                        //the real new root
                        while (replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        //it's not the first node on the left
                        if (replacementParent !== null){

                            //remove the new root from it's
                            //previous position
                            replacementParent.right = replacement.left;

                            //give the new root all of the old
                            //root's children
                            replacement.right = this._root.right;
                            replacement.left = this._root.left;
                        } else {

                            //just assign the children
                            replacement.right = this._root.right;
                        }

                        //officially assign new root
                        this._root = replacement;

                }

            //non-root values
            } else {

                switch (childCount){

                    //no children, just remove it from the parent
                    case 0:
                        //if the current value is less than its
                        //parent's, null out the left pointer
                        if (current.value < parent.value){
                            parent.left = null;

                        //if the current value is greater than its
                        //parent's, null out the right pointer
                        } else {
                            parent.right = null;
                        }
                        break;

                    //one child, just reassign to parent
                    case 1:
                        //if the current value is less than its
                        //parent's, reset the left pointer
                        if (current.value < parent.value){
                            parent.left = (current.left === null ?
                                           current.right : current.left);

                        //if the current value is greater than its
                        //parent's, reset the right pointer
                        } else {
                            parent.right = (current.left === null ?
                                            current.right : current.left);
                        }
                        break;

                    //two children, a bit more complicated
                    case 2:
                    //reset pointers for new traversal
                        replacement = current.left;
                        replacementParent = current;

                        //find the right-most node
                        while(replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        replacementParent.right = replacement.left;

                        //assign children to the replacement
                        replacement.right = current.right;
                        replacement.left = current.left;

                        //place the replacement in the right spot
                        if (current.value < parent.value){
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }
                    //no default

        }

    }
  },

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


var nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
// console.log("Inorder traversal: ");
// nums.inOrder(nums.root);
// console.log("next line");
// nums.preOrder(nums.root);
// console.log("next line");
// nums.postOrder(nums.root);
// console.log("next line");
// console.log(nums.getMin());
// console.log("next line");
// console.log(nums.getMax());
console.log(nums.find(22));
console.log(nums.find(99));
console.log(nums.find(23));
console.log(nums.find(23));

/*
         (23)
         /  \
     (16)    (45)
     / \      / \
  (3)  (22)(37) (99)

*/



