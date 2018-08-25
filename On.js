const _ =  require('lodash')
const executor = require('./executor')
const arrSize = Math.floor(Math.random() * 20) + 3;
const defaultNum = Math.floor(Math.random() * 10);
const arr = new Array(arrSize).fill(defaultNum);
const delayMilliseconds = 1000;
console.log('Array Size => ', arrSize);
console.log('Estimated time in seconds=> ', arrSize);
console.log('Estimated time in minutes=> ', arrSize / 60);
console.log('Estimated time in hours=> ', arrSize / 3600 );

async function example() {
  let totalDurarion = 0;
  for (let i = 0; i < arr.length; i++) {
    totalDurarion += await executor(delayMilliseconds, () => {
      arr[i] = Math.floor(Math.random() * 10);
    })
  }
  console.log('totalDurarion time in second => ', totalDurarion);
  console.log('totalDurarion time in minutes => ', totalDurarion / 60);
  console.log('totalDurarion time in hours => ', totalDurarion / 3600);
}

example();


