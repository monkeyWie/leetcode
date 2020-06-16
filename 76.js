/**
给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0,
    right = 0;
  const window = {};
  const needs = {};
  for (let i = 0; i < t.length; i++) {
    const ch = t.charAt(i);
    needs[ch] = needs[ch] ? needs[ch] + 1 : 1;
  }
  let index = -1;
  let min = s.length + 1;

  while (right < s.length) {
    const ch1 = s.charAt(right);
    right++;
    if (needs[ch1]) {
      window[ch1] = window[ch1] ? window[ch1] + 1 : 1;
      while (match(window, needs)) {
        const len = right - left;
        if (len < min) {
          index = left;
          min = len;
        }
        const ch2 = s.charAt(left);
        if (window.hasOwnProperty(ch2)) {
          window[ch2]--;
        }
        left++;
      }
    }
  }

  return index == -1 ? "" : s.substr(index, min);
};

function match(window, needs) {
  for (const ch in needs) {
    if (!window[ch] || window[ch] < needs[ch]) {
      return false;
    }
  }
  return true;
}

console.log(minWindow("A", "AA"));
