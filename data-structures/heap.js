// 最小堆
function Heap() {
  this.arr = [null];

  // 获取父节点下标
  this.getParent = function (index) {
    return parseInt(index / 2);
  };

  // 获取左子节点下标
  this.getLeftChild = function (index) {
    return index * 2;
  };

  // 获取右子节点下标
  this.getRightChild = function (index) {
    return index * 2 + 1;
  };

  // 插入元素
  this.insert = function (val) {
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  };

  // 弹出堆顶
  this.pop = function () {
    if (this.size() == 0) {
      return undefined;
    }
    const result = this.arr[1];
    // 将堆顶和堆底交换
    this.arr[1] = this.arr[this.arr.length - 1];
    // 删除元素
    this.arr.splice(this.arr.length - 1);
    // 下沉
    this.sink(1);
    return result;
  };

  this.peek = function () {
    if (this.size() == 0) {
      return undefined;
    }
    return this.arr[1];
  };

  // 上浮
  this.swim = function (index) {
    // 如果没到堆顶，并且值比父节点小，就上浮
    let parent = this.getParent(index);
    while (parent > 0 && this.arr[index] < this.arr[parent]) {
      swap(this.arr, index, parent);
      index = parent;
      parent = this.getParent(index);
    }
  };

  // 下沉
  this.sink = function (index) {
    // 如果没到堆底
    while (this.getLeftChild(index) <= this.arr.length - 1) {
      const left = this.getLeftChild(index);
      const right = this.getRightChild(index);

      // 先假设左边的值比右边的小
      let target = left;
      // 看看是不是右边更小
      if (right <= this.arr.length - 1 && this.arr[right] < this.arr[left]) {
        target = right;
      }
      // 与下沉的元素比较，本来就比两个子节点小就无需下沉了
      if (this.arr[index] <= this.arr[target]) {
        return;
      }
      if (this.arr[index] === undefined || this.arr[target] === undefined) {
        console.log(this.arr);
      }
      // 交换位置
      swap(this.arr, index, target);
      index = target;
    }
  };

  this.size = function () {
    return this.arr.length - 1;
  };

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

/* const heap = new Heap();
const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
arr.forEach((v) => {
  heap.insert(v);
});
console.log(heap.arr);
arr.forEach(() => {
  console.log(heap.pop());
}); */

module.exports = Heap;
