// TODO 双向链表没写完

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.list = new LinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  //访问之后插入到头部
  const node = this.cache[key];
  if (node) {
    this.list.moveFirst(node);
    return node.val.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const val = { key, value };
  const node = this.list.add(val);
  this.list.moveFirst(node);
  this.cache[key] = node;
  if (this.list.len() > this.capacity) {
    //清除尾部数据
    const tail = this.list.removeLast();
    delete this.cache[tail.val.key];
  }
};

/**
 * 双向链表
 */
function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
  this.list = null;

  this.add = function (val) {
    this.size++;
    const temp = new Node(val);
    if (!this.list) {
      this.list = temp;
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      temp.prev = this.tail;
      this.tail = temp;
    }
    return temp;
  };

  this.moveFirst = function (node) {
    const prev = node.prev;
    if (!prev) {
      //已经在第一，不用操作了
      return;
    }

    //把节点抽出来
    node.prev.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    }

    //再插入到头部
    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
    this.head = node;
    this.list = node;
  };

  this.removeLast = function () {
    const temp = this.tail;
    this.tail = temp.prev;
    if (this.tail) {
      this.size--;
      this.tail.next = null;
    }
    return temp;
  };

  this.len = function () {
    return this.size;
  };
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2); // 缓存容量

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得关键字 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得关键字 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4

/* const list = new LinkedList();
list.add("a");
list.add("b");
const c = list.add("c");
list.add("d");
list.moveFirst(c);
console.log(list);
console.log(list.len());
 */
