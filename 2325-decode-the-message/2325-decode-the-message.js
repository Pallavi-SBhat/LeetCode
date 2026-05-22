/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let map=new Map();
    let alphabet='abcdefghijklmnopqrstuvwxyz';
    let index=0;

    for(let ch of key){
        if(ch!==" "&&!map.has(ch)){
            map.set(ch,alphabet[index]);
            index++;
        }
    }
    let result="";
    for(let ch of message){
        if(ch===" "){
            result+=ch;  
         }
        else{
           result+=map.get(ch);
        }
    }
    return result;
};