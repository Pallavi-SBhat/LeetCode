/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
        let last = -1, v = n, result = 0, i = -1;
    while(v > 0) {
        i++;
        if(v & 1) {
            if(last > -1) {
                result = Math.max(result, i - last);
            }
            last = i;
        }

        v >>= 1;
    }
    return result;
};