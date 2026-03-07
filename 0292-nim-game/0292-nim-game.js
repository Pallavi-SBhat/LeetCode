/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
      
     if (n<=3) return true;

    //any heap size divisible by 4 is a losing position if both players play optimally.
    
    return n%4!==0;
};