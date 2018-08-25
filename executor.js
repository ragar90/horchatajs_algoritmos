const _ = require('lodash');
const moment = require('moment');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executor(ms, fn, ...args) {
  const beforeTime = moment(); // Starting
  await timeout(ms);
  fn(...args);
  const afterTime = moment();
  const duration = moment.duration(afterTime.diff(beforeTime)).asSeconds()
  return new Promise(resolve => resolve(duration));
}

module.exports = executor