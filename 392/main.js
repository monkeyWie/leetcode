/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  return case2.apply(this,arguments);
};

// 双指针，复杂度O(N)
function case1(s, t) {
  if (!s) {
    return true;
  }
  for (let i = 0, j = 0; i < t.length; i++) {
    if (s[j] == t[i]) {
      j++;
      if (j == s.length) {
        return true;
      }
    }
  }
  return false;
}

// 双重循环，复杂度O(N)
function case2(s, t) {
  if (!s) {
    return true;
  }
  for (let i = 0, j = 0; i < s.length; i++, j++) {
    let flag = false;
    for (; j < t.length; j++) {
      if (s[i] == t[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return false;
    }
  }
  return true;
}

console.log(isSubsequence("aa", "bba"));

console.log(isSubsequence("abc", "ahbgdc"));

console.log(isSubsequence("axc", "ahbgdc"));
