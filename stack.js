const _ = require('lodash')
const readline = require('readline');
const stack = [];

const acceptedCommands = ['A', 'D', 'S', 'W']
const directions = {
  'A': {
    dimension: 'HORIZONTAL',
    orientation: -1,
  },
  'D': {
    dimension: 'HORIZONTAL',
    orientation: 1,
  },
  'S': {
    dimension: 'VERTICAL',
    orientation: -1,
  },
  'W': {
    dimension: 'VERTICAL',
    orientation: 1,
  }
}
const normals = {
  'HORIZONTAL': (direction) => {
    return direction.orientation > 0 ? 'RIGHT' : 'LEFT'
  },
  'VERTICAL': (direction) => {
    return direction.orientation > 0 ? 'UP' : 'DOWN'
  }
}

const inverters = {
  'HORIZONTAL': (direction) => {
    const reverseDirection = direction.orientation * -1
    return reverseDirection > 0 ? 'RIGHT' : 'LEFT'
  },
  'VERTICAL': (direction) => {
    const reverseDirection = direction.orientation * -1
    return reverseDirection > 0 ? 'UP' : 'DOWN'
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let command = input.toUpperCase();
  if (command === 'PRINT') {
    const stackTrace = _.reverse(stack).map((step) => `${step}`).join('\n');
    console.log(stackTrace);
  } else if (command === 'EXIT') {
    console.log('Exiting... :D')
    process.exit(0)
  } else if (command === 'BACKTRACE'){
    while(stack.length > 0) {
      const direction = stack.pop()
      const newDirection = inverters[direction.dimension](direction)
      console.log('BACKTRACKING => ', newDirection)
    }
    console.log('You are back to your initial point');
  } else if (acceptedCommands.indexOf()) {
    stack.push(directions[command]);
  }

});