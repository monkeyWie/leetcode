/**
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(0);
  let head = result;
  let node1 = l1;
  let node2 = l2;

  while (true) {
    let v1 = 0;
    let v2 = 0;
    if (node1 != null) {
      v1 = node1.val;
      node1 = node1.next;
    }
    if (node2 != null) {
      v2 = node2.val;
      node2 = node2.next;
    }
    // 这里的head.val是上一步进位的结果，如果没进位则是0
    const sum = head.val + v1 + v2;
    // 处理进位
    head.val = sum % 10;
    const q = parseInt(sum / 10);
    // l1和l2遍历完了，并且没有进位
    if (node1 == null && node2 == null && q == 0) {
      break;
    }
    head.next = new ListNode(q);
    head = head.next;
  }

  return result;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));
