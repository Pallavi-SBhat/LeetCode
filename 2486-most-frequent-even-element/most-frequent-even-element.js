/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map=new Map();
    for(let num of nums){
        if(num%2==0){
            map.set(num,(map.get(num)||0)+1);
        }
    }
    let maxValue=-1;
    let maxKey=null;
    for(let [key,value] of map.entries()){
        if(maxValue<value){
            maxValue=value;
            maxKey=key;
        }else if(maxValue==value&&maxKey>key)
            maxKey=key;
    }

    if(maxKey!=null)
        return maxKey;
    else return -1;
};