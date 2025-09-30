class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;  // in case k > n

        // store last k elements in temp
        int[] temp = new int[k];
        for (int i = 0; i < k; i++) {
            temp[i] = nums[n - k + i];
        }

        // shift the rest to the right
        for (int i = n - 1; i >= k; i--) {
            nums[i] = nums[i - k];
        }

        // put temp elements at start
        for (int i = 0; i < k; i++) {
            nums[i] = temp[i];
        }
    }
}
