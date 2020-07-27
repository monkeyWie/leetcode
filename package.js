/**
 * 0/1背包问题
 * 一共有N件物品，第i（i从1开始）件物品的重量为w[i]，价值为v[i]。
 * 在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？
 */

/**
 *
 * @param {物品列表} items
 * @param {背包上限} W
 * 
解题思路：
定义dp[i][j]为：第i件物品放入重量限制为j公斤背包时可以获得的最大价值。
当第i件物品放入重量为j的背包时，假设i的重量为2，价值为v[i]
那么背包重量为3(j=3)时，最大价值为以下两种情况取最大值：
i-1件物品放入重量限制为3公斤背包时的最大价值  (即不放入第i件物品)
或
i-1件物品放入重量限制为1(3-2)公斤背包时最大价值 + 第i件物品的价值  (放入第i件物品，并且放的下)


即可推导公式为：dp[i][3] = max(dp[i-1][3],dp[i-1][3-2]+v[i])

dp[i][j] = max(dp[i-1][j],dp[i-1][j-w[i]]+v[i])
 */
function main(items, W) {
  const dp = [];
  for (let i = 0; i < items.length; i++) {
    dp[i] = [0];
    const v = items[i][0];
    const w = items[i][1];
    for (let j = 1; j < W + 1; j++) {
      // 背包放的下
      if (j >= w) {
        if (i == 0) {
          dp[i][j] = v;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
        }
      } else {
        dp[i][j] = dp[i - 1][j] || 0;
      }
    }
  }
  return dp[items.length - 1][W];
}

// [价格,重量]
const items = [
  [4, 12],
  [2, 2],
  [2, 1],
  [1, 1],
  [10, 4]
];

console.log(main(items, 3));
