var reverseList = function(head) {
  if(!head || !head.next) return head;
      var reverse = function(pre, cur) {
      if(!cur) return pre;
      const temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
      return reverse(pre, cur);
  }
  return reverse(null, head);
};