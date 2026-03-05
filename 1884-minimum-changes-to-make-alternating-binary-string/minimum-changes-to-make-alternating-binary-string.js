/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    
    let count1 = 0; // pattern 010101
    let count2 = 0; // pattern 101010

    for (let i = 0; i < s.length; i++) {

        let expected1 = (i % 2 === 0) ? '0' : '1';
        let expected2 = (i % 2 === 0) ? '1' : '0';

        if (s[i] !== expected1) {
            count1++;
        }

        if (s[i] !== expected2) {
            count2++;
        }
    }

    return Math.min(count1, count2);
};