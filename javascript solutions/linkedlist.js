function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(value) {
  var node = {
    value: value,
    next: null
  };
  var current;

  if(this.head === null) {
    this.head = node;
  } else {
    current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
  return node;
};
