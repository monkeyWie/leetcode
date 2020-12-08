/**
给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  function backtrack(options, paths) {
    if (paths.length == nums.length) {
      result.push([...paths]);
      return;
    }
    for (let i = 0; i < options.length; i++) {
      if (paths.includes(options[i])) {
        continue;
      }
      paths.push(options[i]);
      backtrack(options, paths);

      paths.splice(paths.length - 1);
    }
  }

  backtrack(nums, []);

  return result;
};

console.log(permute([1, 2, 3]));
