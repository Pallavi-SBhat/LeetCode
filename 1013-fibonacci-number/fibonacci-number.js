/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const array = [0, 1];
    if (n < 2) {
        return n;
    }

    for (var i = 2; i <= n; i++) {
        array.push(array[i-2] + array[i-1]); 
    }

    return array[n]
};