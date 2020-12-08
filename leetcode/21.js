/**
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const node = new ListNode(null, null);
  let temp = node;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }
  temp.next = l1 || l2;
  return node.next;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

console.log(mergeTwoLists(l1, l2));
