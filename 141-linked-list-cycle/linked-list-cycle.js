/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let first=head;
    while(first&& first.next){
        head=head.next;
        first=first.next.next;
        if(head===first)return true;
    }
    return false;
};