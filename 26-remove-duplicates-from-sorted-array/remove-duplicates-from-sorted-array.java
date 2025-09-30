class Solution {
    public int removeDuplicates(int[] nums) {
        int unique=0;
        for(int i=1;i<nums.length;i++){
            if(nums[unique]!=nums[i]){
                nums[unique+1]=nums[i];
                unique++;

            }
        }
        return unique+1;
        
    }
}