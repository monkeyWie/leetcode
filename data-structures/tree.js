// 二叉树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;

  this.insert = function(val) {
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

  this.find = function(val) {
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
  this.preOrder = function() {
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
  this.inOrder = function() {
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
  this.postOrder = function() {
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
}

const root = new TreeNode(10);
for (const val of [28, 32, 15, 7, 9, 3]) {
  root.insert(val);
}

console.log(root.preOrder());
console.log(root.inOrder());
console.log(root.postOrder());
