/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  // 思路: 最大值一定是在数组的两侧,每次都比较最前面和最后面的2个数字的平方
  let res = [];
  while(nums.length > 0) {
      let s1 = nums[0];
      let s2 = nums[nums.length - 1];
      if(s1*s1 > s2*s2) {
          res.unshift(s1*s1);
          nums.shift();
      } else {
          res.unshift(s2*s2);
          nums.pop();
      }
  }
  return res;
};