/**
 * 二分查找法写法可以左闭右闭 左闭右开
 */

// var search = function(nums, target) {
//     // 采用左闭右闭写法
//     let left = 0;
//     let right = nums.length - 1;
//     while(left<=right) {
//         let midIndex = Math.floor((left + right)/2);
//         let midVal = nums[midIndex];
//         if(midVal > target) {
//             right = midIndex - 1;
//         } else if(midVal < target) {
//             left = midIndex + 1;
//         } else {
//             // 所有元素都是不重复的,所以找到返回即可
//             return midIndex;
//         }
//     }
//     return -1;
// };
// 采用左闭右开写法
// var search = function(nums, target) {
//     // 采用左闭右开写法
//     let left = 0;
//     let right = nums.length;
//     while(left<right) {
//         let midIndex = Math.floor((left + right)/2);
//         let midVal = nums[midIndex];
//         if(midVal > target) {
//             right = midIndex;
//         } else if(midVal < target) {
//             left = midIndex + 1; // 注意这里必须是+1，左闭右开
//         } else {
//             // 所有元素都是不重复的,所以找到返回即可
//             return midIndex;
//         }
//     }
//     return -1;
// };
// while循环也可以改为递归的写法
var search = function(nums, target) {
  // 采用左闭右开写法
  let searchRec = (left, right) => {
      if(left>= right) return -1;
      let midIndex = Math.floor((left + right)/2);
      let midVal = nums[midIndex];
      if(midVal > target) {
          return searchRec(left, midIndex);
      } else if(midVal < target) {
          // 注意这里必须是+1，左闭右开
          return searchRec(midIndex + 1, right);
      } else {
          // 所有元素都是不重复的,所以找到返回即可
          return midIndex;
      }
  }
  return searchRec(0, nums.length);
};