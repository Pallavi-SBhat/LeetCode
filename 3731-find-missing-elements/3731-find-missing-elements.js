/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let sorarr = nums.sort((a, b) => a - b);

    let i = sorarr[0];
    let n = sorarr[sorarr.length - 1];
    let j = 0;
    let missing = [];

    for (; i <= n; i++) {
        if (i === sorarr[j]) {
            j++; 
        } else {
            missing.push(i);
        }
    }

    return missing;
};