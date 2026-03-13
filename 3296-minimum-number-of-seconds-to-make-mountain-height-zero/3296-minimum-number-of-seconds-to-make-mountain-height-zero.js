/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */

var minNumberOfSeconds = function (mountainHeight, workerTimes) {

    const pq = new MinPriorityQueue((x) => x[0]);

    for (let workerTime of workerTimes) {
        let nextFinishTime = workerTime;
        pq.push([nextFinishTime, workerTime, 1]);
    }

    for (let i = 0; i < mountainHeight; i++) {

        let [nextFinishTime, workerTime, timesDone] = pq.pop();

        timesDone += 1;
        nextFinishTime += workerTime * timesDone;

        pq.push([nextFinishTime, workerTime, timesDone]);
    }

    let res = 0;

    for (let [nextFinishTime, workerTime, timesDone] of pq) {
        res = Math.max(res, nextFinishTime - workerTime * timesDone);
    }

    return res;
};