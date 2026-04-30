/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array(m).fill(0).map(() => 
             Array(n).fill(0).map(() => 
             Array(k + 1).fill(Number.MAX_SAFE_INTEGER))
           );

    let isValid = function (i, j)
    {
        if (i <= m - 1 && j <= n -  1) return true;
        return false;
    }

    let backtrack = function(i, j, cost)
    {
        if (cost > k) return -1;
        
        if (i == (m - 1) && j == (n - 1))
        {
            return grid[i][j];
        }

        if (dp[i][j][cost] != Number.MAX_SAFE_INTEGER) return dp[i][j][cost];

        let result = -1;
        for (let dir of [[0, 1], [1, 0]])
        {
            let ni = i + dir[0];
            let nj = j + dir[1];
            if (!isValid(ni, nj)) continue;
            
            let aCost = grid[ni][nj] == 0 ? 0 : 1;
            let res = backtrack(ni, nj, cost + aCost);
            if (res == -1) continue;
            result = Math.max(result, grid[i][j] + res);
        }
        dp[i][j][cost] = result;
        return result;
    }

    return backtrack(0, 0, 0);
};