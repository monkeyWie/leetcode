/**
 * 二叉树
 * 前、中、后序遍历其实就是根节点遍历的时候出现的位置
 * 前序：跟->左->右
 * 中序：左->跟->右
 * 后序：左->右->跟
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;

  this.insert = function (val) {
    if (val <= this.val) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = new TreeNode(val);
      }
    } else {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new TreeNode(val);
      }
    }
  };

  this.find = function (val) {
    if (val == this.val) {
      return true;
    }
    if (val <= this.val) {
      if (this.left) {
        return this.left.find(val);
      } else {
        return false;
      }
    } else {
      if (this.right) {
        return this.right.find(val);
      } else {
        return false;
      }
    }
  };

  //前序遍历
  this.preOrder = function () {
    const result = [];
    function _preOrder(node) {
      result.push(node.val);
      if (node.left) {
        _preOrder(node.left);
      }
      if (node.right) {
        _preOrder(node.right);
      }
    }
    _preOrder(this);
    return result;
  };

  //中序遍历
  this.inOrder = function () {
    const result = [];
    function _inOrder(node) {
      if (node.left) {
        _inOrder(node.left);
      }
      result.push(node.val);
      if (node.right) {
        _inOrder(node.right);
      }
    }
    _inOrder(this);
    return result;
  };

  //后序遍历
  this.postOrder = function () {
    const result = [];
    function _postOrder(node) {
      if (node.left) {
        _postOrder(node.left);
      }
      if (node.right) {
        _postOrder(node.right);
      }
      result.push(node.val);
    }
    _postOrder(this);
    return result;
  };

  //非递归前序遍历
  this.preOrderStack = function () {
    const result = [];
    const stack = [];
    let root = this;
    while (root != null || stack.length > 0) {
      while (root) {
        result.push(root.val);
        stack.push(root);
        root = root.left;
      }
      const node = stack.pop();
      root = node.right;
    }
    return result;
  };

  //非递归中序遍历
  this.inOrderStack = function () {
    const result = [];
    const stack = [];
    let root = this;
    while (root != null || stack.length > 0) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      const node = stack.pop();
      result.push(node.val);
      root = node.right;
    }
    return result;
  };

  //非递归后序遍历 前序是根-左-右 后序的左-右-根 只要把前序左右顺序改变下根-右-左，再逆序就是后序遍历的结果了
  this.postOrderStack = function () {
    const result = [];
    const stack = [];
    let root = this;
    while (root != null || stack.length > 0) {
      while (root) {
        result.push(root.val);
        stack.push(root);
        root = root.right;
      }
      const node = stack.pop();
      root = node.left;
    }
    return result.reverse();
  };

  //非递归按层级遍历
  this.bfsOrder = function () {
    const result = [];
    const queue = [this];
    while (queue.length) {
      let size = queue.length;
      while (size > 0) {
        //先进先出，取最前面的
        const node = queue.shift();
        result.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
        size--;
      }
    }
    return result;
  };

  this.deserialize = function (arr) {
    this.val = arr[0];
    const queue = [this];
    let index = 1;
    while (index < arr.length) {
      const node = queue.shift();

      const leftVal = arr[index];
      const rightVal = arr[index + 1];

      if (leftVal) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      }
      if (rightVal) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      }
      index += 2;
    }
    return this;
  };
}

module.exports = TreeNode;

/*
const root = new TreeNode(10);
for (const val of [28, 32, 15, 7, 9, 3]) {
  root.insert(val);
}
*/

/* 
console.log(root.preOrder());
console.log(root.inOrder());
console.log(root.postOrder());
*/

/* console.log(root.preOrderStack());
console.log(root.inOrderStack());
console.log(root.postOrderStack());

console.log(root.bfsOrder());
 */
console.log(
  JSON.stringify(new TreeNode().deserialize([3, 9, 20, null, null, 15, 7]))
);
