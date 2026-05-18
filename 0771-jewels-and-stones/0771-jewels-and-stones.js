/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
let jewelsSet=new Set(jewels);
let count=0;
// for(let i=0;i<jewels.length;i++){
//     let ch=jewels.charAt(i);
// jewelsSet.add(ch);
// }
for(let i=0;i<stones.length;i++){
    if(jewelsSet.has(stones.charAt(i)))
    count++;
}
return count;
    
};