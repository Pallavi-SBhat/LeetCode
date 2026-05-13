/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null) return head;

    let tail = head , size = 1;
    while( tail != null && tail.next != null ){
         size++;
         tail = tail.next;
    }
    // Make LL Circular 
    if(tail != null)
    tail.next = head;
    k = k % size; // make k in range of size
    let move = size - k;
    // Move tail by 
    while( move != 0){
         tail = tail.next;
         move--;
    }

    // new head will be at next of tail
    head = tail.next;

    // now, break Circular LL
    tail.next = null;
    return head;  
};