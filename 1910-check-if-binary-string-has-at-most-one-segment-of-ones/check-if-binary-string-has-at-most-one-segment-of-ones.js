/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
     let acc = '';
    const history = [];

    for (const c of s) {
        if (c === '1') {
            acc += '1'
        }

        if (c === '0' && acc !== '') {
            history.push(acc)
            acc = '';
        }

        if (history.length > 1) {
            return false
        }
    }

    if (acc !== '') {
        history.push(acc)
    }

    return history.length === 1
};