class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        int partLength = n - k;
        int[] temp = new int[partLength];

        for (int i = 0; i < partLength; i++) {
            temp[i] = nums[i];
        }

        for (int i = 0; i < k; i++) {
            nums[i] = nums[partLength + i];
        }

        
        for (int i = 0; i < partLength; i++) {
            nums[k + i] = temp[i];
        }
    }
}
