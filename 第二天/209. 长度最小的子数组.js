/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let res = nums.length + 1;
  let right = left = sum = 0;
  while(right < nums.length) {
      let val = nums[right];
      right++;
      sum+=val;
      while(sum >= target) {
          res = (right-left) < res ? right-left : res;
          sum-=nums[left];
          left++;
      }
  }
  return res !== (nums.length + 1) ? res : 0;
};