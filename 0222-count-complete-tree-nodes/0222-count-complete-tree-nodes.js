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
 * @return {number}
 */
var countNodes = function(root) {
     function dfs(root) {
    if (!root) return 0;

    let ll = dfs(root.left)
    let rr = dfs(root.right)

    return 1 + ll + rr;
  }

  return dfs(root);
    
};