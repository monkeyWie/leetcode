/**
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (
    (num1.length == 1 && num1[0] == "0") ||
    (num2.length == 1 && num2[0] == "0")
  ) {
    return "0";
  }

  const arr1 = num1.split("").map(n => parseInt(n));
  const arr2 = num2.split("").map(n => parseInt(n));

  const result = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = arr2.length - 1; j >= 0; j--) {
      const index = arr1.length - i - 1 + (arr2.length - j - 1);
      const num = arr1[i] * arr2[j] + (result[index] || 0);
      const m = num % 10;
      const s = parseInt(num / 10);
      result[index] = m;
      // 进位
      if (s > 0) {
        result[index + 1] = result[index + 1] ? result[index + 1] + s : s;
      }
    }
  }
  return result.reverse().join("");
};

console.log(multiply("123", "456"));
