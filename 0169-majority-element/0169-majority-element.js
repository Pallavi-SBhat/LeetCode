/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=0,ans;
    for(let i=0;i<nums.length;i++){
        if(count===0) ans=nums[i];
        if(ans===nums[i]) count++;
        else count--;
    }
    return ans;
};