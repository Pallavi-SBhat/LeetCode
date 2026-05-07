/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    const prefixMax = new Array(n);

    prefixMax[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    }

    let suffixMin = Number.MAX_SAFE_INTEGER;

    for (let i = n - 1; i >= 0; i--) {
        if (prefixMax[i] > suffixMin) {
            result[i] = (i + 1 < n) ? result[i + 1] : 0;
        } else {
            result[i] = prefixMax[i];
        }
          
        suffixMin = Math.min(suffixMin, nums[i]);
    }
      
    return result;
};