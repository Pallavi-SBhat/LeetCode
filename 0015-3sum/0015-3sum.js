/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
      arr = arr.sort((a, b) => a - b)
    let ans = []
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1, k = arr.length - 1
        if (i > 0 && arr[i] == arr[i - 1]) continue
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k]
            if (sum === 0) {
                let temp = [arr[i], arr[j++], arr[k--]]
                ans.push(temp)
                while (j < k && arr[j] == arr[j - 1]) j++
                while (j < k && arr[k] == arr[k + 1]) k--
            }else if(sum<0)j++
            else k--
        }
    }
    return ans
};