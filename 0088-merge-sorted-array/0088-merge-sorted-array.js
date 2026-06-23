/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=m-1,j=n-1,k=m+n-1;
    // let temp=new Array(m+n);
    // while(i<m && j<n){
    //     if(nums1[i]<nums2[j]){
    //         temp[k++]=nums1[i++];
    //     }
    //     else{
    //          temp[k++]=nums2[j++];

    //     }
    // }
    // while(i<m){
    //     temp[k++]=temp[i++];
    // }
    //  while(j<n){
    //     temp[k++]=temp[j++];
    // }
    // return temp;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]) nums1[k--]=nums1[i--];
        else nums1[k--]=nums2[j--];
    }
    while(j>=0){
        nums1[k--]=nums2[j--];
    }
};