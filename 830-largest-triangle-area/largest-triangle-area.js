/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    
    function area3points([x1, y1], [x2, y2], [x3, y3]) {
        return Math.abs(
            x1 * (y2 - y3) +
            x2 * (y3 - y1) +
            x3 * (y1 - y2)
        ) / 2;
    }

    let max = 0;
    const n = points.length;

    for (let i = 0; i < n-2; i++) {
        for (let j = i + 1; j < n-1; j++) {
            for (let k = j + 1; k < n; k++) {
                const area = area3points(points[i], points[j], points[k]);
                max = Math.max(max, area);
            }
        }
    }

    return max;
};