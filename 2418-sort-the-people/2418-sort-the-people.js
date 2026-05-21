/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map=new Map();
    for(let i=0;i<names.length;i++){
    map.set(heights[i],names[i]);
    }

    let arr=[]
    while(map.size>0){
        let max=-1;

    for(let key of map.keys()){
        if(key>max) 
            max=key;
    }
    arr.push(map.get(max));
    map.delete(max);
    }
    return  arr;

};