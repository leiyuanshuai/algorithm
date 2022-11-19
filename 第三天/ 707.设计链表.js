class LinkNode {
  constructor(val,next){
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
  }
}
var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
  this.tail = null;
};
MyLinkedList.prototype.checkIndexValid = function(index) {
  console.log(index, this.size);
  if(index >= this.size || index < 0) return false;
  return true;
};
MyLinkedList.prototype.getItem = function(index) {
  if(!this.checkIndexValid(index)) return null;
  let p = new LinkNode(0, this.head);
  while(index >= 0) {
      p = p.next;
      index--;
  }
  return p;
};
MyLinkedList.prototype.get = function(index) {
  if(!this.checkIndexValid(index)) return -1;
  return this.getItem(index).val;
};

MyLinkedList.prototype.addAtHead = function(val) {
  if(this.size === 0) {
      this.head = this.tail = new LinkNode(val);
  } else {
      this.head = new LinkNode(val, this.head);
  }
  this.size++;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new LinkNode(val);
  if(this.size === 0) {
      this.head = this.tail = node;
  } else {
      this.tail.next = node;
      this.tail = node;
  }
  this.size++;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.size){
      return
  } else if(index === this.size) {
      this.addAtTail(val);
      return
  } else if(index <= 0) {
      this.addAtHead(val);
      return
  } else {
      let preNode = this.getItem(index - 1);
      preNode.next = new LinkNode(val, preNode.next);
      this.size++
  }
};
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this.size) return;
  if(index === 0) {
      this.head = this.head.next;
      // 如果删除的这个节点同时是尾节点，要处理尾节点
      if(index === this.size - 1){
          this.tail = this.head
      }
      this.size--;
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getItem(index - 1);    
  node.next = node.next.next;
  // 处理尾节点
  if(index === this.size - 1) {
      this.tail = node;
  }
  this.size--;
};
/** 
* @param {number} index
* @return {void}
*/
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if(!this.checkIndexValid()) return;
//     if(index === 0) {
//         if(this.size === 1) {
//             this.head = this.tail = this.head.next;
//         } else {
//             this.head = this.head.next;
//         }
//     } else {
//         // 如果index是最后一个元素
//         let preNode = this.getItem(index -1);
//         let curNode = this.getItem(index);
//         let nextNode = curNode.next;
//         if(preNode && curNode) {
//             preNode.next = nextNode;
//             if(curNode === this.tail) {
//                 this.tail = preNode;
//             }
//         }
//     }
//     this.size--;
//     console.log("head", this.head);
//     console.log("tail", this.tail);
// };

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/