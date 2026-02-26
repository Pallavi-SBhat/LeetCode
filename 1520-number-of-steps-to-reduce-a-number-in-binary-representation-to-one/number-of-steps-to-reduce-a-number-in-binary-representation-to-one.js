/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
     let steps = 0;
    s = s.split("");

    while (s.length > 1) {
        if (s[s.length - 1] === "0") {
            s.pop(); // divide by 2
        } else {
            // add 1
            let i = s.length - 1;
            while (i >= 0 && s[i] === "1") {
                s[i] = "0";
                i--;
            }
            if (i >= 0) {
                s[i] = "1";
            } else {
                s.unshift("1");
            }
        }
        steps++;
    }

    return steps;
};