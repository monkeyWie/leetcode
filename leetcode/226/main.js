const TreeNode = require("../../data-structures/tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  function invert(root) {
    if (root.left || root.right) {
      const temp = root.left;
      root.left = root.right;
      root.right = temp;
      if (root.left) {
        invert(root.left);
      }
      if (root.right) {
        invert(root.right);
      }
    }
  }

  invert(root);
  return root;
};
