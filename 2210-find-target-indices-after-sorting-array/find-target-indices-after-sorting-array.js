/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let lessNum = 0, equalNum = 0;

    for(let num of nums){
        if(num < target) lessNum++;
        if(num == target) equalNum++;
    }

    let res = [];

    for(let i = 0; i < equalNum; i++){
        res.push(i + lessNum);
    }

    return res;
};