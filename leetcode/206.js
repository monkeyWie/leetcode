/**
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return case2(head);
};

/**
 * 迭代法双指针
 */
function case1(head) {
  let curr = head;
  let prev = null;
  while (curr != null) {
    const temp = curr.next;
    head.next = prev;
    prev = temp;
  }
}

/**
 * 递归法
 */
function case2(head) {
  if (!head.next) {
    return head;
  }
  const curr = case2(head.next);
  head.next.next = head;
  head.next = null;
  return curr;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(JSON.stringify(reverseList(head)));
