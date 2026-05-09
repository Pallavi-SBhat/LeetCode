/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row=matrix.length,col=matrix[0].length;
    let temp=new Array(col);

    for(let i=0;i<temp.length;i++){
        temp[i]=new Array(row);
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            temp[j][i]=matrix[i][j];    
                }
    }
    return temp;
};