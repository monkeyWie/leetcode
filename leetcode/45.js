/**
45. 跳跃游戏 II
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
说明:

假设你总是可以到达数组的最后一个位置。
 */

/**
 * @param {number[]} nums
 * @return {number}
思路：
输入：[10, 9, 8, 9, 6, 5, 4, 3, 2, 1, 1, 1]
i =0, i+nums[0] = 0+10 = 10 //第一步最大可以走到10，则第一步的最优解目前为[i,i+10] = [0,10]
i =1, i+nums[1] = 1+9 = 10 //如果迈出第二步最大可以走到10，即走两步[[0,1],[1,10]]，那还不如走一步的情况
i =2, i+nums[2] = 2+8 = 10 //如果迈出第二步最大可以走到10，即走两步[[0,2],[2,10]]，那还不如走一步的情况
i =3, i+nums[3] = 3+9 = 12 //如果迈出第二步最大可以走到12，即走两步[[0,3],[3,12]]，那说明第二步迈出是有意义的，那么步数+1，并且标记最大步为12
...以此类推,如果有超过最大步的就更新最大步，否则到了最大步
 */
var jump = function(nums) {
  if (nums.length == 1) {
    return 0;
  }

  let count = 0;
  let begin = 0;
  let end = 1;

  while (true) {
    console.log(`begin:${begin} end:${end}`);
    count++;
    let max = 0;
    for (let i = begin; i < end; i++) {
      max = Math.max(max, nums[i] + i);
    }
    if (max >= nums.length - 1) {
      return count;
    }
    let maxi = 0;
    for (let i = begin; i < end; i++) {
      if (nums[i] + i == max) {
        maxi = i;
      }
    }
    begin = maxi;
    end = max + 1;
  }
  /* let end = 0;
  let maxJump = 0;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxJump = Math.max(maxJump, nums[i] + i);
    if (end == i) {
      end = maxJump;
      count++;
    }
  }
  return count; */
};

console.log(jump([2, 3, 1, 1, 4, 2, 3, 1, 1]));
