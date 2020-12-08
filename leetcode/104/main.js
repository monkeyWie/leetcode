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
 * @return {number}
 */
var maxDepth = function (root) {
  return case2.apply(this, arguments);
};

// DFS
function case1(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// BFS
function case2(root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    while (size > 0) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size--;
    }
    depth++;
  }
  return depth;
}

const root = new TreeNode(3);
for (const val of [9, 20, 15, 17]) {
  root.insert(val);
}

console.log(maxDepth(root));
