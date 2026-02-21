/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
       const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    
    let result = 0;

    for (let num = left; num <= right; num++) {
        let n = num;
        let count = 0;

        // Count set bits
        while (n > 0) {
            n &= (n - 1);
            count++;
        }

        if (primeSet.has(count)) {
            result++;
        }
    }

    return result;
};