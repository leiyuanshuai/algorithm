/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  // 双指针解法 覆盖方法
  let i = 0;
  for(let j = 0; j< nums.length;j++){
      if(nums[j] !== val) {
          nums[i++] = nums[j];
      }
  }
  return i;
};