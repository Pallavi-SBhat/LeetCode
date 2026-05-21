/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1);
    }
    let sum=0;
    for(let [nums,count] of map.entries()){
        if(count==1)
            sum+=nums;
    }
    return sum;
};