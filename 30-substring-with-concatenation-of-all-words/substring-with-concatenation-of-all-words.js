/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // 1. Edge Case Handling
    if (!s || words.length === 0) return [];

    let right = 0;
    let left = 0;
    let result = [];
    
    // 2. Pre-calculate lengths
    const wordLen = words[0].length;
    const totalLength = words.length * wordLen;
    
    // 3. Build Frequency Map
    let wordCountMap = words.reduce((a, b) => {
        a.set(b, (a.get(b) ?? 0) + 1);
        return a;
    }, new Map());

    // 4. Helper function to validate a specific window
    function checkIsCurrentSubstringValid() {
        const dp = new Map(wordCountMap); // Clone map for this iteration
        let str = "";
        
        // Iterate through the window [left, right]
        for (let i = left; i <= right; i++) {
            str += s[i];
            
            // When we have built a chunk of wordLen
            if (str.length === wordLen) {
                const count = (dp.get(str) ?? 0);
                
                // If word invalid or exhausted, this window is bad
                if (count === 0) {
                    return false;
                }
                
                dp.set(str, count - 1);
                str = ""; // Reset for next chunk
            }
        }
        return true;
    }

    // 5. Sliding Window Loop
    while (right < s.length) {
        let lengthOfSubstring = right - left + 1;
        
        // Once window reaches required size
        if (lengthOfSubstring === totalLength) {
            if (checkIsCurrentSubstringValid()) {
                result.push(left);
            }
            // Slide window forward
            left++;
        }
        right++;
    }

    return result;
};