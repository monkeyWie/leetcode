/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length - 4; i++) {
    let arr = [nums[i]];
    for (let j = i + 1; j < nums.length; j++) {
      arr.push(nums[j]);
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[k]);
        if (arr.length == 4) {
          const sum = arr.reduce((n1, n2) => n1 + n2);
          if (sum == target) {
            result.push([...arr]);
          }
          arr.pop();
        }
      }
      arr.splice(1)
    }
  }
  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
