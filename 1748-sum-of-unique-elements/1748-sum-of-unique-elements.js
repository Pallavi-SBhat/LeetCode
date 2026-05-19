/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let  map=new Map();
    let sum=0;
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    for(let [num,count] of map.entries()){
        if(count===1){
            sum+=num;
        }
    }
    return sum;
};