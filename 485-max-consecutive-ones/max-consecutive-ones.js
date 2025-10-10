/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current=0,result=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            current++;
            result=Math.max(result,current);
        }
        else{
            current=0;
        }
    }
    return result;
};