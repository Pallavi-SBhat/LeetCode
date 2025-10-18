/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry=0,str="",sums=0;
    let i=num1.length-1,j=num2.length-1;
    while(i>=0||j>=0||carry){
        let n1= i>=0 ? +num1[i]:0;
        let n2= j>=0 ? +num2[j]:0;
        sums=n1+n2+carry;
        str=(sums%10)+str;
        carry=Math.floor(sums/10);
        i--;
        j--;
    }
    return str;
};