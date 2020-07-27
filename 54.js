/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) {
    return [];
  }
  const result = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0,
    j = 0,
    maxi = m,
    maxj = n,
    mini = 1,
    minj = 0;
  while (true) {
    // 从左往右遍历
    if (j >= maxj) {
      break;
    }
    for (; j < maxj; j++) {
      result.push(matrix[i][j]);
    }
    i++;
    j--;
    maxj--;
    // 从上往下遍历
    if (i >= maxi) {
      break;
    }
    for (; i < maxi; i++) {
      result.push(matrix[i][j]);
    }
    j--;
    i--;
    maxi--;
    // 从右往左遍历
    if (j < minj) {
      break;
    }
    for (; j >= minj; j--) {
      result.push(matrix[i][j]);
    }
    j++;
    i--;
    minj++;
    // 从下往上遍历
    if (i < mini) {
      break;
    }
    for (; i >= mini; i--) {
      result.push(matrix[i][j]);
    }
    j++;
    i++;
    mini++;
  }

  return result;
};

/*
[0,0],[0,1],[0,2],[0,3]
[1,0],[1,1],[1,2],[1,3]
[2,0],[2,1],[2,2],[2,3]
[3,0],[3,1],[3,2],[3,3]
[4,0],[4,1],[4,2],[4,3]
*/

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);
