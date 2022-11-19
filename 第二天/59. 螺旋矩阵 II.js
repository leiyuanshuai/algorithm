/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  let res = new Array(n).fill(0).map(item => {
      return new Array(n).fill(0);
  });
  let loop = Math.floor(n/2); // 需要遍历几个圈
  let mid =  Math.floor(n/2);
  // console.log(res);
  let startX = 0;
  let startY = 0;
  let offset = 1;
  let count = 1;
  let row = 0;
  let col = 0;
  while(loop--){
      while(col < (n-offset)) {
          res[row][col] = count++;
          col++;
      }
      while(row < (n-offset)) {
          res[row][col] = count++;
          row++;
      }
      while(col >= offset) {
          res[row][col] = count++;
          col--;
      }
       while(row >= offset) {
          res[row][col] = count++;
          row--;
      }
      col++;
      row++;
      offset++;
  }
  let isSpec = n%2!==0;
  if(isSpec){
      res[mid][mid] = n * n;
  }
  return res
};