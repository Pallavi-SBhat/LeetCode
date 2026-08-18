/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(arr, k) {
    let l = 0; 
    r = k-1;
    map = {}

    while(r < arr.length){
        let seen = new Set()
        for(let i = l; i <= r; i++){
            seen.add(arr[i])
        }

        for(let num of seen){
            map[num] = map[num] ? map[num] + 1 : 1
        }
        l++
        r++
    }

    let ans = -1

    for (let num in map){
        if(map[num] === 1){
            ans = Math.max(ans, Number(num))
        }
    }

    return ans
};