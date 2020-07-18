/**
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let result = "";
  const stack = [];
  const nums = [];
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "[") {
      nums.push(parseInt(num));
      stack.push(s[i]);
      num = 0;
    } else if (s[i] == "]") {
      const deepStack = [];
      let n = 0;
      while (true) {
        const c = stack.pop();
        if (c == "[") {
          n = nums.pop();
          break;
        } else {
          deepStack.unshift(c);
        }
      }
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < deepStack.length; k++) {
          stack.push(deepStack[k]);
        }
      }
    } else if (/[\d]/.test(s[i])) {
      // 如果是数字
      num = num * 10 + parseInt(s[i]);
    } else {
      stack.push(s[i]);
    }
  }
  return result + stack.join("");
};

console.log(decodeString("100[a]"));
