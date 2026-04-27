/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const hasValidPath = grid => {
    const m = grid.length;
    const n = grid[0].length;
    if (m === 1 && n === 1) return true;

    const trans = [
        [],
        [-1, 1, -1, 3],
        [0, -1, 2, -1],
        [3, 2, -1, -1],
        [1, -1, -1, 2],
        [-1, 0, 3, -1],
        [-1, -1, 1, 0]
    ];

    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const inits = [[], [1, 3], [0, 2], [2, 3], [1, 2], [0, 3], [0, 1]];

    const check = state => {
        let [r, c] = dirs[state];
        const B = new Uint8Array(m * n);
        B[0] = 1;

        while (grid[r]?.[c]) {
            if (B[r * n + c]) return false;
            B[r * n + c] = 1;

            state = trans[grid[r][c]][state];
            if (state === -1) return false;
            if (r === m - 1 && c === n - 1) return true;

            const [dr, dc] = dirs[state];
            r += dr;
            c += dc;
        }
        return false;
    };

    return inits[grid[0][0]].some(c => check(c));
};