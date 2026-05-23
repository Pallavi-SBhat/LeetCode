/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])||0)+1);
    }
    let distinct=0;
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])===1){
            distinct++;
            if(distinct==k){
                return arr[i];
            }
        }
    }
    return "";
};