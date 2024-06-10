// Input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputLines = [];

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

rl.on('line', line => {
  inputLines.push(line.toString())
  rl.close()
})

rl.on('close', () => {
  const result = isOrdered(parseNumbersLine(inputLines[0]))
  console.log(result + '');
})

// ###
// Solution

function isOrdered(arr) {
  let isIncreasing
  if (arr.length < 2) return 'YES'

  for (let i = 1; i < arr.length; i++) {
    if (isIncreasing === undefined) {
      if (arr[i] > arr[i - 1]) {
        isIncreasing = true
      } else if (arr[i] < arr[i - 1]) {
        isIncreasing = false
      }
    } else if (arr[i] !== arr[i - 1] && (isIncreasing && arr[i] < arr[i - 1]) || (!isIncreasing && arr[i] > arr[i - 1])) {
      return 'NO'
    }
  }

  return 'YES'
}
