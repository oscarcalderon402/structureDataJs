class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const myNode = new Node(value);
    this.head.next = myNode;
    this.tail = myNode;
    this.length++;
    return this.head;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.head;
  }

  insert(index, value) {
    this.length++;
    for (let i = 1; i <= this.length; i++) {
      if (index === i) {
      }
    }
  }
}

let myLinkedList = new MySinglyLinkedList("oscar");
