class DataNode {
  constructor(data, previousNode = null, nextNode = null) {
    this.data = data;
    this.previous = previousNode;
    this.next = nextNode
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  add(element) {
    if (this.head === null) {
      this.head = element
    }
    if (this.tail !== null) {
      this.tail.next = element
    }
    element.previous = this.tail;
    this.tail = element
    this.size = this.size + 1;

  }
  remove() {
    if (this.size > 0) {
      const element = this.tail;
      this.tail = element.previous;
      this.tail.next = null
      this.size = this.size - 1;
    }
  }
  iterate(iterateFun) {
    let currentElement = this.head;
    while (currentElement !== null) {
      iterateFun(currentElement)
      currentElement = currentElement.next;
    }
  }
}
const list = new DoubleLinkedList()
for (let i = 0; i < 10; i++) {
  let element = new DataNode(i)
  list.add(element)
}

function printNode(node) {
  let previousData = node.previous !== null ? node.previous.data : 'NULL'
  let nextData = node.next !== null ? node.next.data : 'NULL'
  console.log(` ${previousData}\t<== ${node.data} ==>\t${nextData}`);
}

list.iterate((currentElement) => {
  printNode(currentElement)
})

list.remove();
list.remove();
console.log('\n========================\n');


list.iterate((currentElement) => {
  printNode(currentElement)
})