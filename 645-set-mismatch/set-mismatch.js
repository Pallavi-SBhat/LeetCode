/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1);
    }
    let dup=-1,miss=-1;
    for(let i=1;i<=nums.length;i++){
        if(map.has(i)){
            if(map.get(i)===2){
                dup=i;
            }
        }else{
            miss=i;
        }
    }
    return [dup,miss];
};