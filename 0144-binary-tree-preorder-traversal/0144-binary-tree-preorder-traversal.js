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
 * @return {number[]}
 */
//sol-2 (iterative method)
//LOGIC-preorder= root->left->right
var preorderTraversal = function(root) {
    
    //edge case
    if(!root) return [] ;//stop if root does not exist and return [] (as in result we need empty arra given in Q example)

    let ans=[];
    let stack=[root];

    while(stack.length){

        let curr= stack.pop();
        ans.push(curr.val);
        //
        curr.right && stack.push(curr.right);//push right 1st and left in last as when we pop in stack we get curr as left
        //we want left coz in preorder we want (root->left->right) in this order
        //Note- push only when curr.right exist
        curr.left && stack.push(curr.left);
    }
    return ans;
}
//or you can write this 2 line as
//curr.right && stack.push(curr.right);
//curr.left && stack.push(curr.left);

//         if (curr.right) {
//             stack.push(curr.right);
//         }
//         if (curr.left) {
//             stack.push(curr.left);
//         }