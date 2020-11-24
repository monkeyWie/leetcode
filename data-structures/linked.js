function ListNode(val) {
  this.val = val;
  this.next = null;

  this.deserialize = function (arr) {
    this.val = arr[0];
    let node = this;
    for (const val of arr.slice(1)) {
      node.next = new ListNode(val);
      node = node.next;
    }
    return this;
  };
}

module.exports = ListNode;

console.log(JSON.stringify(new ListNode().deserialize([1, 2, 4, 5, 6])));
