/**
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/perfect-squares
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const arr = [n];
  let count = 0;
  const cache = {};
  while (true) {
    const nextArr = [];
    count++;
    for (let i = 0; i < arr.length; i++) {
      if (cache[arr[i]]) {
        continue;
      }
      for (let j = 1, k = 1; k <= n; j++, k = j * j) {
        const temp = arr[i] - k;
        if (temp == 0) {
          return count;
        }
        nextArr.push(temp);
      }
      cache[arr[i]] = true;
    }
    arr.splice(0);
    arr.push(...nextArr);
  }
};

console.log(numSquares(12));
