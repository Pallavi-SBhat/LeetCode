/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function check(node){
    if(!node) return 0;
    let leftheight=check(node.left);
    if(leftheight===-1) return -1;
    let rightheight=check(node.right);
    if(rightheight===-1)return -1;
    if(Math.abs(leftheight-rightheight)>1)return -1;
    return Math.max(leftheight,rightheight)+1;
    }
    return check(root)!==-1;
};