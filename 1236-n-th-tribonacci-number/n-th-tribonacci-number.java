class Solution {
    private int[] dp = new int[38]; // n ≤ 37 as per LeetCode constraints

    public int tribonacci(int n) {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;

        if (dp[n] != 0) return dp[n]; // already computed
        dp[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        return dp[n];
    }
}
