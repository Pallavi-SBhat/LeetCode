/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    const N = nums.length;
    const stack = [];
    const ans = Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        const currNum = nums[i];
        
        // Initialize the current element as its own component
        let curr = {
            min: currNum,
            max: currNum,
            start: i,
            end: i
        };
        
        // If the current component can be reached by the previous component, merge them
        while (stack.length > 0 && curr.min < stack.at(-1).max ) {
            const popped = stack.pop();
            curr.min = Math.min(curr.min, popped.min);
            curr.max = Math.max(curr.max, popped.max);
            curr.start = popped.start; // Expand the component's boundary backward
        }
        
        stack.push(curr);
    }
    
    // Resolve the maximums for all indices within each component
    for (let {min, max, start, end} of stack) {
        for (let i = start; i <= end; i++) {
            ans[i] = max;
        }
    }
    
    return ans;
};