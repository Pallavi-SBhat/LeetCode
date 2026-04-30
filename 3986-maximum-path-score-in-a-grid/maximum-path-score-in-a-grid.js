/**
 * @param {number[][]} grid - 2D grid where grid[i][j] is the value at (i,j)
 * @param {number} k - Maximum allowed cost budget
 * @return {number} - Maximum score achievable, or -1 if no valid path
 */
var maxPathScore = function(grid, k) {
    const n = grid.length;
    if (n === 0) return -1; // Handle empty grid edge case
    const m = grid[0].length;

   
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => Array(k + 1).fill(null))
    );

    /**
     * DFS function to compute max score from position (i,j) with remaining cost c
     * @param {number} i - current row
     * @param {number} j - current column
     * @param {number} c - remaining cost budget
     * @return {number} - max achievable score, or -Infinity if impossible
     */
    function dfs(i, j, c) {
        if (i >= n || j >= m) return -Infinity;

        if (i === n - 1 && j === m - 1) {
            const cost = grid[i][j] === 0 ? 0 : 1; // cost of current cell
            return c >= cost ? grid[i][j] : -Infinity; // valid only if enough budget
        }

        if (dp[i][j][c] !== null) return dp[i][j][c];

        const cost = grid[i][j] === 0 ? 0 : 1;

        if (c < cost) return dp[i][j][c] = -Infinity;

        const down = dfs(i + 1, j, c - cost);
        const right = dfs(i, j + 1, c - cost);

        const maxPath = Math.max(down, right);

        return dp[i][j][c] = maxPath === -Infinity ? -Infinity : grid[i][j] + maxPath;
    }

    const result = dfs(0, 0, k);

    return result === -Infinity ? -1 : result;
};