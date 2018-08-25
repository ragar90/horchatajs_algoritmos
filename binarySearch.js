const _ = require('lodash');
const totalNumbers = 10000000;
let array = new Array(totalNumbers).fill(0).map((number) => {
  return Math.floor(Math.random() * 30);
})
array = _.shuffle(array)
console.log('array size => ', array.length);

class BinaryTreeNode {
  constructor(data){
    this.data = data
    this.left = null;
    this.right = null;
  }
  find(data){
    if (this.isLeafNode() && this.data !== data){
      return null;
    } else if (this.isEqual(data)) {
      return this
    } else if (this.isGreaterThan(data)) {
      return this.right.find(data)
    } else {
      return this.left.find(data)
    }
  }
  add(node){
    if (this.isGreaterThan(node.data) && this.isRightLeafNode()) {
      this.right = node
    } else if (this.isGreaterThan(node.data) && !this.isRightLeafNode()) {
      this.right.add(node)
    } else if (this.isLessThan(node.data) && this.isLeftLeafNode()){
      this.left = node;
    } else if (this.isLessThan(node.data) && !this.isLeftLeafNode()){
      this.left.add(node)
    }
  }

  isGreaterThan(data){
    return this.data > data;
  }

  isLessThan(data) {
    return this.data < data;
  }

  isEqual(data) {
    return this.data === data;
  }

  isLeafNode(){
    return this.left === null && this.right === null
  }
  isRightLeafNode(){
    return this.right === null
  }
  isLeftLeafNode(){
    return this.left === null
  }
}

const firstDataElement = array[0]
const rootNode = new BinaryTreeNode(firstDataElement);
for (let i = 1; i < array.length; i++) {
  const data = array[i];
  rootNode.add(new BinaryTreeNode(data))
}
const target = 25;

console.time('BTN timer')
const found = rootNode.find(target)
console.log(`Found ${target} => `, found);
console.timeEnd('BTN timer')

console.log('\n======================\n');


console.time('Iterative timer')
let found2 = false
for (let i = 0; i < array.length; i++) {
  const data = array[i];
  if (data === target){
    found2 = true
  }
}
console.log(`Found ${target}  => `, found2);
console.timeEnd('Iterative timer')
