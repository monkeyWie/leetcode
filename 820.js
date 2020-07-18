/**
给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 

示例：

输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
 

提示：

1 <= words.length <= 2000
1 <= words[i].length <= 7
每个单词都是小写字母 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/short-encoding-of-words
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  //  将每一个单词加入hashset中
  const wordSet = new Set(words);

  // 遍历words中的每个单词，检查其word[1:],word[2:],...,word[-1:]后缀是否在wordSet中
  //  例如,word[3:]如果在wordSet中 ，则说明word[2:]可以被merge。 比如（time，me）
  for (const word of words) {
    for (let i = 1; i < word.length; i++) {
      const temp = word.substring(i);
      if (wordSet.has(temp)) {
        wordSet.delete(temp);
      }
    }
  }
  let total = 0;
  // 最后统计wordSet中所剩单词每个长度总和 再加上len(wordSet)即可（#的个数）
  for (const word of wordSet) {
    total += word.length;
  }
  return total + wordSet.size;
};

console.log(minimumLengthEncoding(["time", "me", "bell"]));
