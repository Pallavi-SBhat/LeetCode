/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let total = nums.reduce((acc, curr) => acc + curr, 0)
    for (let i = 0; i < nums.length; i++) {
      let rightSum = total - nums[i] - leftSum
      if (leftSum === rightSum) {
        return i
      }
      leftSum += nums[i]
    }
    return -1
  
};