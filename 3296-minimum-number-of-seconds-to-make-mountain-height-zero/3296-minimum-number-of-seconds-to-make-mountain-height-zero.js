/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    
    const H = mountainHeight;
    const w0 = workerTimes[0];

    if (workerTimes.length === 1) {
        return w0 * (H * (H + 1) / 2);
    }
    
    workerTimes.sort((a,b)=>a-b);

    // Upper bound: smallest worker does all work
    let left = 0;
    let right = w0 * (H * (H + 1) / 2); // <= 5e15, safe in Number

    function canFinish(T) {
        let total = 0;

        for (let w of workerTimes) {
            const val = 1 + 8 * T / w;
            if (val < 1) break;

            const x = Math.floor((Math.sqrt(val) - 1) / 2);
            if (x <= 0) break;

            total += x;
            if (total >= H) return true;
        }
        return total >= H;
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canFinish(mid)) right = mid;
        else left = mid + 1;
    }

    return left;
};