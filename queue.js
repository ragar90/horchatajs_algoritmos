const _ = require('lodash');
const faker = require('faker')
const delayTimeout = 10
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue[this.queue.length] = element

  }
  dequeue(){
    const element = this.queue[0];
    this.queue = _.slice(this.queue, 1);
    return element
  }
  size(){
    return this.queue.length;
  }
}
function taskCreator(text) {
  return () => {
    console.log(text);
  }
}
const q = new Queue();
let count = 0
function producer() {
  name = faker.name.findName();
  let user = {
    name: name,
    saludo: `User ${name} Just Leave -> ${count}`
  }
  console.log(`Enqueueing task for ${user.name} -> ${count}`);
  q.enqueue(taskCreator(user.saludo))
  count++;
}

function consumer() {
  q.dequeue()()
}

producer()
producer()
producer()
producer()

while(q.size() > 0){
  producer()
  consumer()
  consumer()
}
