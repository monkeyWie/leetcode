/**
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /* let left = 0,
    right = 0;
  const window = {};
  let max = 0;
  while (right < s.length) {
    const ch1 = s.charAt(right);
    window[ch1] = window[ch1] ? window[ch1] + 1 : 1;
    right++;
    while (window[ch1] > 1) {
      const ch2 = s.charAt(left);
      if (window[ch2]) {
        window[ch2]--;
      }
      left++;
    }
    max = Math.max(max, right - left);
  }
  return max; */
  return case1(s);
};

function case1(s) {
  let i = 0,
    j = 0,
    max = 0;
  const map = {};
  while (j < s.length) {
    const ch = s[j];
    // 有重复字符出现
    if (map[ch] !== undefined) {
      i = Math.max(i, map[ch] + 1);
      // i++;
      console.log(i);
    }
    map[ch] = j;
    max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
}

// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abba"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
