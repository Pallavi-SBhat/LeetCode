/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);

    // Step 1: Count 1s in each row and column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    // Step 2: Check special positions
    let specialCount = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                specialCount++;
            }
        }
    }

    return specialCount;
};