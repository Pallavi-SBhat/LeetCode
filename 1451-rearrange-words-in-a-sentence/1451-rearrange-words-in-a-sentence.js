/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let arr=text.toLowerCase().split(" ");
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j].length>arr[j+1].length){
let temp=arr[j];
arr[j]=arr[j+1];
arr[j+1]=temp;
            }
        }
    }
    let result= arr.join(" ");
    return result.charAt(0).toUpperCase() + result.slice(1);
};