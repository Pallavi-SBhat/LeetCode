/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
       let obj={};
    s=s.split(' ');
    if(s.length!=pattern.length){
        return false
    }
    for(let i=0;i<pattern.length;i++){
        if(!obj[pattern[i]]){
            for(let key in obj){
                if(obj[key]===s[i]){
                    return false
                }
            }
           obj[pattern[i]]=s[i]
        }
        
    }
    for(let i=0;i<pattern.length;i++){
        if(obj[pattern[i]]!=s[i]){
            return false
        }
    }
    return true
};