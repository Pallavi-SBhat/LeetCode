/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var binarySearch = function(start, end){
        const middle = (start + end) / 2 | 0;

        if(guess(middle) === 0)
            return middle;
        else if(guess(middle) === 1)
            return binarySearch(middle + 1, end);
        else
            return binarySearch(start, middle - 1);
    }

    return binarySearch(1, n);
};