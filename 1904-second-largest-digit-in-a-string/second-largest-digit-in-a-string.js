/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            let num = ch - '0';

            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num < largest && num > secondLargest) {
                secondLargest = num;
            }
        }
    }

    return secondLargest;
};