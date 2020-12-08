/**
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];
  const ip = [];
  for (let i = 1; i <= 3; i++) {
    for (let j = i + 1; j <= i + 3; j++) {
      for (let k = j + 1; k <= j + 3; k++) {
        ip[0] = s.substring(0, i);
        ip[1] = s.substring(i, j);
        ip[2] = s.substring(j, k);
        ip[3] = s.substring(k);
        if (ip.findIndex(s => isNotVaid(s)) != -1) {
          continue;
        }
        result.push(ip.join("."));
      }
    }
  }

  function isNotVaid(s) {
    if (!s) {
      return true;
    }
    return parseInt(s) > 255 || (s.length > 1 && s.startsWith("0"));
  }

  return result;
};

console.log(restoreIpAddresses("010010"));
