/**
673. 最长递增子序列的个数
给定一个未排序的整数数组，找到最长递增子序列的个数。

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  // dp[i] = max(dp[i],dp[j]+1)  j=0...i-1  nums[j] < nums[i]

  let max = 0;
  const dp = nums.map(() => 1);
  const count = nums.map(() => 1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // 第一次找到i的最长子序列，此长度的次数会等于count[j]
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 == dp[i]) { //TODO 这里没看懂
          count[i] += count[j];
        }
      }
    }
  }
  return count;
};

console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]));
