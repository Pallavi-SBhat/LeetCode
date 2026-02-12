/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0;
  let ans = 0;
  let set = new Set();

  while (j < s.length) {

    if(set.has(s[j])){
        while(set.has(s[j])==true){
            set.delete(s[i])
            i++
        }
    }
  
    set.add(s[j])
    ans = Math.max(ans,j-i+1)
    j++

  }

  return ans;
};
