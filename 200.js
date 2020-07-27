/**
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const dp = [];

  function dfs(i, j) {
    //如果已经访问过，就跳过
    if (dp[i] && dp[i][j]) {
      return;
    }
    if (!dp[i]) {
      dp[i] = [];
    }
    dp[i][j] = true;

    if (grid[i][j] == "1") {
      // 上
      if (i - 1 >= 0 && grid[i - 1][j] == "1") {
        dfs(i - 1, j);
      }
      // 下
      if (i + 1 < grid.length && grid[i + 1][j] == "1") {
        dfs(i + 1, j);
      }
      // 左
      if (j - 1 >= 0 && grid[i][j - 1] == "1") {
        dfs(i, j - 1);
      }
      // 右
      if (j + 1 < grid[0].length && grid[i][j + 1] == "1") {
        dfs(i, j + 1);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 && !(dp[i] && dp[i][j])) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
  ])
);
