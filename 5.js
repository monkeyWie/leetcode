/**
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  return case2(s);
};

/**
暴力法
时间：O(n^3)
空间：O(1)
 */
function case1(s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const str = s.substring(i, j + 1);
      let flag = true;
      for (let k = 0; k < Math.ceil(str.length / 2); k++) {
        if (str.charAt(k) != str.charAt(str.length - k - 1)) {
          // 不是回文数
          flag = false;
          break;
        }
      }
      if (flag && str.length > max.length) {
        max = str;
      }
    }
  }
  return max;
}

/**
动态规划
时间：O(n^2)
空间：O(n^2)

思路：
通过回文数"aba"可以很快的判断出"cabac"也是一个回文数
dp(i,j)表示下标i到j的字符串是否为回文数
dp(i,j)=dp(i+1,j-1)&&s[i]==s[j]
dp(i,i)=true
子字符串长度小于3时，只需要判断首尾是否相等即可得知是否为回文数，即：
dp(i,j)=s[i]==s[j] (j-i<3)
 */
function case2(s) {
  //没有找到一个长度大于1的回文数，那就默认取第一个字符串作为最大回文数
  let maxLen = 1;
  let index = 0;
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  }
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (j - i < 3) {
        // 子字符串长度小于等于3时，只需要判断首尾是否相等即可
        dp[i][j] = s.charAt(i) == s.charAt(j);
      } else {
        dp[i][j] = s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1];
      }

      if (dp[i][j]) {
        // 是回文数
        const len = j - i + 1;
        if (len > maxLen) {
          maxLen = len;
          index = i;
        }
      }
    }
  }
  return index == -1 ? "" : s.substr(index, maxLen);
}

/**
动态规划优化
时间：O(n^2)
空间：O(n)

思路：

 */
function case3(){

}

console.log(longestPalindrome("ac"));
