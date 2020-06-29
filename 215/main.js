/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return case1(nums, k);
};

// 直接排序
function case1(nums, k) {
  nums.sort((n1, n2) => n2 - n1);
  return nums[k - 1];
}

// 构建最大二叉堆
function case2(nums, k) {
  //非叶子节点个数计算
  parseInt(nums.length / 2);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
