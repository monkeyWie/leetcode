/**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return "";
  }
  if (strs.length == 1) {
    return strs[0];
  }
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const temp = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != temp) {
        return prefix;
      }
    }
    prefix += temp;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
