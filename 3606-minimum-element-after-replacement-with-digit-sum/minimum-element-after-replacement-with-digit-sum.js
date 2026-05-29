/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let min = +Infinity;

    for (let i = 0; i < nums.length; i++) {
        let sum = digitSum(nums[i]);
        if (sum < min) {
            min = sum
        }

    }

    return min
};

function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        let rem = n % 10;
        sum += rem;
        n = Math.floor(n / 10)
    }
    return sum;
}