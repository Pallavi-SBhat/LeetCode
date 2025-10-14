/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left=1,right=num;
    while(left<=right){
        let mid=Math.floor((right+left)/2);
        let square=mid*mid;
        if(square==num) 
            return true;
        if(square<num) 
            left=mid+1;
        else
            right=mid-1;
    }
    return false;
};