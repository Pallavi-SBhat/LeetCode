/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
          var counter = 0;
    for(var i = 0; i < n; i++){
        if(i === 0){
            counter = 3;
        } else {
            counter *= 2;
        }
    }
    if(k > counter){
        return "";
    }
    var selected = "";
    var depth = 0;
    var allowedAfter = {a: ["b", "c"], b: ["a", "c"], c: ["a", "b"]};
    var lastLetter = "";
    var kRemaining = k;
    for(i = 1; i <= n; i++){
        var blockSize = Math.pow(2, n - i);
        if(i === 1){
            if(k <= blockSize){
                lastLetter = "a";
            } else if (k <= blockSize * 2) {
                lastLetter = "b";
                kRemaining -= blockSize;
            } else {
                lastLetter = "c";
                kRemaining -= (blockSize * 2);
            }
            selected += lastLetter;
        } else {
            var allowedOnes = allowedAfter[lastLetter];
            if(kRemaining <= blockSize){
                lastLetter = allowedOnes[0];
            } else {
                lastLetter = allowedOnes[1];
                kRemaining -= blockSize;
            }
            selected += lastLetter;
        }
    }
    return selected;

};