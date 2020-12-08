const Heap = require("../../data-structures/heap");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return case3(nums, k);
};

// 直接排序
function case1(nums, k) {
  nums.sort((n1, n2) => n2 - n1);
  return nums[k - 1];
}

// 构建最小二叉堆，移除掉n-k个元素，然后取堆顶
function case2(nums, k) {
  const heap = new Heap();
  nums.forEach((n) => heap.insert(n));
  for (let i = 0; i < nums.length - k; i++) {
    heap.pop();
  }
  return heap.peek();
}

// 构建长度为 k 的最小堆
function case3(nums, k) {
  const heap = new Heap();
  nums.forEach((n) => {
    if (heap.size() < k) {
      heap.insert(n);
    } else if (n > heap.peek()) {
      heap.pop();
      heap.insert(n);
    }
  });
  return heap.peek();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
