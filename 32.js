/**
给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
通过次数42,807提交次数143,517
(())
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 *
 */
var longestValidParentheses = function(s) {
  function isVaid(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ")") {
        if (stack.pop() != "(") {
          return false;
        }
      } else {
        stack.push(str[i]);
      }
    }
    return stack.length == 0;
  }

  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isVaid(s.substring(i, j))) {
        max = Math.max(max, j - i);
      }
    }
  }
  return max;
};

console.log(longestValidParentheses("((())))()())))(((()()(())))((()(())()((()))())())())()())))))))(((()(())(()))(()()(()()((()))()(())(()(())))))()(())(()()(((()(()()))))((()()))))))()((()())()()))((())()((((()))()()()((()())))())((())))))))(()()((((((()))(((((((()()))((())()(()())()()()(()())(()())(())))()()))))()(((())(())(()())()))()(()))(())((()))))(())))()))((()((()(())(()()()()()))(())())()))))()(()(((())))()()()(((()((()))(()((((((())((()))(()(())(()))(())())))()()))))())(()((()()())()))((((()(()))()()))(()())))((()))(()((((()(())(())()((()))(()))())))(((()(())))((())()(()(((())))())())()()()())((()()))))))(()))(())()(((()))()()((()))(()))(((()))))))))(()(())())(()((())(()()))((())))(()())((((())))(()(()))())(((()(()((()(())((())())(()))(())))()()(())((()()))((()()((()()())())()))())()))())()))())(()(()))(()))()(())))((((())()())()()())((()())(()())(()()))()(())(())))))()()()((()(())(((()(())()()))(()()((()(((()))))))))(((()((()()((()(((((())((()((()((((((((())()))())((())((()((()(()((())(((()(()))())))))))))))))()((()(())())))()(()))(((()))())()(((()))))((()(())(()())(((()(((()((((())()))))(())((()(((((()((()(()()()()((()((((((((((((())()(()))()()(()())()(()(((()((()(()()()())))((())()))())()()))())(((()(())))))()()()(((())))((()(()(((())(())(()((((()(((()(())(((((())()))())())()()(()())((((()(())))((()())))))))))()(()(())))))))()))()())))((())(()()()()()()()(())(()())))))())((()()))))()))))((())((()(((()))))(((()()))()(()((()()())()))(((()(()((())(()(()(()()))()((()(())))()((())))))(())()(())()))((())(((((()))()())(())))((((()((())())(())))(())))))((())())())((((()((())))()()((()()()))()())())(()())(((()))()()))))(()(())(()))()())(()())(()))(((((((()(()))())()())()())((()(((((()())(((())))()())))(()(()(())()((())()))(())))())()))((((()))())((()))(())))))(()))))))(()))))(())))())()()())()()(())()()(((((()))(((()()))()(()((((()(()(()(())))())))())(()()())()(()))())(()()))(()()((()()))))))(())((()()))(())))())())(())((((()))))()))()))()()()))))((((()((())(()))(()()))(())()())(()())))(()(()(())((()())()((())(()))()))()))))((())))(())(()))()()()()()))((())(((()(())))(((((((()(()))(()))())()((()))(()(())((()((()((())))()()((())))))((((())()())(()()(((()()((()))()()((())))(((()())((((()(())())))())()()()(())()))))))()()((()))())(()(((()()))((())))())())())((((()(((()(())())()())((()((()(()((())()(()))()((())))()(()))))(((()))())())(()((()))))()()(((((()))())))(()(()(())((((())())))((()()())(((((((()(()(()))(())))))()))(()(((((())()))((()()()()((()))()(()()()()))(()))))())())()))()(()()(((())((()))(()())))((()()(((())())))))))(())))((()(()(((())((((()))))(()()()))))(((((((())(()(()))(()(())((())(()(()(()(()())(())()(())(()()(()(()))())(())()()(((()())(())(()(((()()(())()((((()()))())(((()(((((()())()(())))()))))(()(()()(()(()()(((()))()))((()())))()(()(())))))))())((((()()))(()))))()((()))(()))())()))()))))(()(())()()()))(((((()))()())())(()())())))()())))))()()()())))))(())(((()))((())((()()))))()((((()(()(()))))(()(())(((())(()()(((()(())()())(()()(()(()())))()())))(((()()((()())()()((()))()))(((()((((()(((()(((()(()())((()))))()(()())(())()(()(((())((()))(())()(())()(()(())()))())()))()())(()))))()))))((()()()((()(()()(())))())(())()(()()))))))))()((()))((((())))())))((()()()(()(()((((()((()))()()((())((())(()))))(())())(((()()(()))))))(()()))()))((()(()(())()))(((())()))(())(()((((()((()()()))()()))(()()(())())((((((())(())((()())()(()())))()))())(()()(()(()()()(()()()()))(()(()()())())((()()()(((()((()())()()((()()(()((()())()())()((()))(()((()())))))))(())((((())(((((())(((())(()))(((()((()()())()((()(()))()()()(()((((())))(())())))((())))(()(((((()()()((())((((((((()()((((())))())())())))))))(((()())(((()))())))()))((())())())))))))))(()()(((())))))(())()()))((())()))(()(()))((()(()((((()(()(((()))))()))(()(()))())())()()(((())())(((()))))(((()())))()(()())()())()))())())(()()(((()()))(())(((()((())((((())))))((()))))(()((()(())))()(())((()(())((()(()())())))()))))(())())(()())()()()((())))((()()))()()()((((()())))))()))))()))())()((()(())()()(())(((()((()))(()(()()))(()))()))))))))))))(()()))(((())((()(((()()()(()())((((()(()()()))())))())(()())))(()((((()))((()()())(((()))()())(()(()((()(()))))(())()()((()())((()(()(()))((()((()())(((()(((((()()()))(()()(()(((()(()())()()()))((()(()())))())(()(()))(())()())))()()()))()())(()(((((()))()()((((()()()()))()()(()((()))(()))))))))))()))()(()((((((())(()))()((())))(((((())))))(()))))()()(()()()(((((()))()())()((((()()))()(())())))(((()((())))))))))(()()()((()))(()())((())))()()((()())))()()(()))))))))()(((()(()))()())((((((())))(((()(()())())))(())())())()()((((()(()(((())(()()(((((()))(()(())()))))))()))()())))()()(()))(((()))()())))((())(((()()))((((((())))(((())()()(()((()))())(()((()()(((())())()))()()())())(()()((((((((())))()(((())(()))))()()())()(())))(((((()())(((())()()))))()((())())(())()(()(()()((()))()(()(((()))))()()())(())()()()(((()((()()()(()())())(())()(((((()())(())()((((()()()))()((())()((()(()(((()(()))()())())()())()(()()(()(((()))()(())(()())(())((())()((()()())(()))))()(()()))))((())()()((()((()()(()((()()())(())))))())))()))))(((((()(()())(()))((()))()(()())())())))()(()()(()((())))))()()))((())((((()))))())((()))())((())((()(()((()))()()()))()((((((())((((((()((((((((()))(()(((()(((((((((())(())())()())))))))())())))()))(()))))()(()))(())))()()()((()()))(())(()))(()()(()())))()(()()()()())))(())((((()))(((((())(()(((((())((()((((()))(((((()))(()())()))))())()))()(()()))((((()))()())(())))()((())))(((((()()((()()((()))))()((())())()))(((((((((()((())((((())()())))(())())()))())))())()))()(()()(()))(()()()((())((()))())))()(()())()(((((((()))))(()()()((()(())))())()))((())())(()(()(())()()())))))(()()()))())()))()())(((())(())))()(())())))()((()(()(())()()()((()))()))((())((((()((((((()()()))()))())())))))()(())(()())))()(((()())(((())))((())()()))((())())()()(()()())()))())(((()((()(((()())(()(())(((())))()))))))())()((((((()))))))()(()))()))())))())((((())(())()(())()))()))((((((((()()(())())((((())))((((()(())()()(())()))())()))(((()((()))()(((((()()()))))(()(()())))(((()(((()(())())((((())(()((()((()(()()(()()))()))()()))()))))))())()(())())))(((())))((()))((()(())())((())))((()))()))(((()))))(()())()())())()())))())))(())))(())())()((()())()()))((()()())(((((()())))())))()()()((((((())())()((())()))(()))()(()())()())(())()())((()((())(())()()()()((())(()())()()((())))()(((()(()(((((()(())))()(()))()(()))()))())()))()())()(()))))()()())(((())((()((())(()(()))()((()))))))(())(()(())())()()((())((())((((())))))(()()())(()()())(())())(((()()(())(())))()()))(())))))())(())()(((())())))((()(((())))(()((())()))()))((()()())()(((((())((((())))(())()()((()()(()()))(()((()))((())())))))))()())))())())((()(()()()()()))))()))((())(((((()())(()))((())))((()(())))))))))(((())(()(())(()(())((()((()))()((())())()())()((()(())())()(((()()((()(()())))))())((())(((()())(((()(()((())((()(((())(()()((((((()))())))())(()(()(()()())())((()))((())(())(())())))()(()())()))())(())((((())()((())))))(()()((())(((((()))()()))()()())(()(((()))())()()()))(((()()))(()(()((())(())))()()((((()()))()(())()())()()()()()(()()))(((())(((()()()((((((((((()()()(((()))))))())))()(((((((()((((((((()))()(((())())())())((((((()()))(()))()))))(())()())))())(()))(((())()()()((()()((())(()))((()(()())))()(()((()((())()()()()(())()()((())())())()()))()()))))((()()((())(((())(())())))((())())())(()))))())))))()((()(()(()))))()))((((())((())())(()))))()((()))(())((()()))()()((())(())())))(())))))()()(()())((()(())(((()((())))()())))()))()))))(())()(()))((()()()()))(())))(()()(())(((()(((()()))()((()))())()))(()(()))())))))))()((()(()))(((())())(())(()))(())(()((()))))))(()())(()()()(((()(((((()))((()))))(()))(())())(((()(()())(()()()()))())(()((()(()))()))())))(((()(()))))()))(()()((())())(()()())((()))(())))()()))(())))())))(()((())((()))((()))))())()()()((((((())((())()))(()))(())(())())))()())()((())))((()()())(()))(((()))())())))(())(())())()())()))((((()()()()))(())))((((())))(())(()((((()))())()))))))()()()))())))()((())))))((())())))()()(()()(()(()()()())((((())))(())(((())(()(()((((())(()()()(()(()((())(())(()())((((()((()((((((()((((())(((()())()((((()((())()(()(()(()((()()()(()(()())(((()(())(()(())(())(()))()((((((((()()(())))(()()(((())()(()(((((()())((()(())()())(((()(()(())()((((((((())()((()()((((())(((()(()((()((((()((((()(()(())())()(((()()))))))(()(((())()(((()())))((()))))(()()))))(()))))))((())())((())))()()()(()((()))()))()))()()()()()))(((((((()((()))((())()(()(()))()((((((((((((()(())))))(()())))()(()()(()(()()))))(((((()()((())()))())()()()))(())())()())()()((()()(()(()()(()))))))()()))(()()((()))))()((()()()())))(((()(((()()(())(())(()(((())(()((()(()))(()()((())()(()()())()))))))(()()((())((()())))(())(()))()(()))(()))()))()(())()(()())))(()))(()()(((()))))())))))((())())))))()()()))(()))((()())())()()))(((())((()((())()(()))()((()))()(())))))))()()())())))(()()(())(()))(())))))()(()))(()()))))))))((((()()()()()))(()))((()((())))(()())(((()()()(())))))()))()())())(()()()))))))((()())))((())))(())()((()))()(()())())))))(((()()(()(())()())(((((()))((()(())(())))))))()()))))))((()((((()()))()))(()()))(()()(())))))(((()()))(()())))(())()((()((()(((()()()()((()())())(()(((((((()((((())(()((((()()(())))))(()())))))(()())))())(())))((()(()))(()())(((())))((((())))))((()))()(((((((())())())((())))))))(()))))))))()((()()())((())))(())))((()(((()(())(())))()()()()))(())(()(())()())(())))()())((()((()((()()((())())))(()((())()()))()))((()()(()))(((((((()))((())((())((())()()((((((((()())()()()))(()()(((()(())()))()))()))()()(()(((((()))))((())(((()))()((((((((()()()()(()))()(()))()(())))))))()((((()()((()(())()((()))((()()(()()))))))))))(())(()))()()((((())))()((())(()((()((()(())()))()()((((()))))()))())))))())(((()()))()))()(()))(()))()((()((((((())())))()))()((())(()(())))))))()))(()()()())())()))((()))(()((()((()())))))((((())()()())(())())()((()((()())()())()(()))))((()())))()))()()))))()((())))())(()))()))(()((())(()))))()()))(()()((((()()))(((()()())(()(()(((()))())))((((()())()()()(())()()()((()))))((()()(()()))()())))(((((()(())())))))(()))))())))(())())()))))((()))))))(((())(((())()(((())))(()))()())(((()(()(((()))))()(()()(())())))))())())()()((())))()(())((()))((())(()())(()()()(()()())((())())))))((()(()())()()))))(()()(()()()(()()))((((((()))(()())(())(())())((())(()(()))((()()(()))))()))()(())))())))())(()((())))((())(()()()(()))((()((((((()())()()))))()))((()((())()))()((((()()()(((())())))()()()())())())(()())()))()(())(())()))())((()(((((()))(())(((((()))(()())(()(()(())()((()(()(()))()(()))))()(((())(()((((((()))(()(((()()())()())((()())))((()((()())()((((((())()))(()))))(()()()()))())())((((((((())((((()()()))(())()()))(()(()()(()(()))))(()))(()()()(())()()(())(()))())((()()((()(()))()))))())((()())())(((((()(()()))((()()()))()()(()(()(((()())(((((((((()))()())(()(()(())(((((()()))))(()())(()())())(())))))((()))())(((()((((()))()))(()(()(((()()(()(((()()))(())))((((()(()()))))((((()()())()))())()))))((())((((((())()()))()))()(((()((())(()((((()())())((((((((((()(((((()())()()(()))))))()((((())())(((()()((((()()())()(((((())))()))(())())(((()(((())()))()()()()(())))(()(((()(()))())))()(((()()()()()(()(((()(((()))()(())(())()()))()((()))))))()(((((()(()()((())(())((())))()(()())(())))())((())(()(()()(((())((()()(()()((()))))())))()(()))()))))))())())))((((((()())))(())(()))()()))()(())))))))((()))(()()()()))()())()()()()))()()())))))))((())(())))(()))(())((()())))(()(((()))((((())())))(())((())())))))(((()())(())()(())))((()()()((()(()))()))(())))((()(()()((()()()))((()))((()))()))(()())()()(((((((((()(()))()())()((())((((((((()(())()(((()((())()((((((((()))())))(()((()((())())())((()()())))(()(()((((((()))))((((())))((()()(())()())()()())(())(((()(()()(())(((())((((())()()(()()(((())()(())((()(()(((()(()())))()))((()()())(())))))(()(()))()))()(()))))(()((()))()())(())(())(()))((()())()))())()())((((()))))())())(((()))(((()()((()((())(())()()))))(((()((((()(((((((((())()()()(())((()(()()(()()(()()(())()())(((((()))))()(())(((()((((()())(()(((()))))()))())((((()()((()(()))))((())(())(()(()))()()(((()))(((((((((()())))((())()(()(((((((()))))))()()(())(((()(()())()()))((()()))((((()(())())))((()())))))()))))))))()()(((())())((()))())((())((()()))())((((((((())((()((())())))))()()))))))()()(())))))()))()()(((()))))(())((((()()()()))((()((((()()(())(((((()())()))))))())())()((((((((((()))()))((()))(())())(()(()(())((()()(()((())(())((((())(()()(()((()((()(((((()(()()((((())(())())(()()())()())((()(())()(())()))))"));
