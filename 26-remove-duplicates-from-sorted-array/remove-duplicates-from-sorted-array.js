/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length===0)return false;

    let result=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[result]=nums[i];
            result++;
        }
    }
    return result;
};