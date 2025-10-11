/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0)
        return 0;
    if(n===1)
        return 1;
    let f1=0,f2=1,f3;
    for(let i=2;i<=n;i++){
        f3=f1+f2;
        f1=f2;
        f2=f3;
    }
    return f3;
};