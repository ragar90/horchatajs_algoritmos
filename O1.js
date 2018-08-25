const executor = require('./executor')
const delayMilliseconds = 1000;
function addTwoNumbers(a, b) {
  const sum = a + b
  console.log('Result => ', sum);
}
async function example() {
  let duration = await executor(delayMilliseconds, addTwoNumbers, 3, 4)

  console.log('Duration => ', duration);
}
example()