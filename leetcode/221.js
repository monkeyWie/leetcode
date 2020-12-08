/**
在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] != 1) {
        continue;
      }
      let right = 0,
        down = 0;
      for (let k = j + 1; k < matrix[0].length; k++) {
        if (matrix[i][k] == 1) {
          right++;
        } else {
          break;
        }
      }
      for (let k = i + 1; k < matrix.length; k++) {
        if (matrix[k][j] == 1) {
          down++;
        } else {
          break;
        }
      }
      const min = Math.min(right, down);
      if (min > 0) {
        let flag = true;

        if (i == 1 && j == 2) {
          debugger;
        }

        for (let k = i + 1; k <= i + min; k++) {
          if (matrix[k][j + min] != 1) {
            flag = false;
            break;
          }
        }
        if (flag) {
          for (let k = j + 1; k <= j + min; k++) {
            if (matrix[i + min][k] != 1) {
              flag = false;
              break;
            }
          }
        }
        if (flag) {
          max = Math.max(max, min);
        }
      }
    }
  }
  return max * max;
};

console.log(
  maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
  ])
);
