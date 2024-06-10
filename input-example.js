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

  if (inputLines.length === 2) {
    rl.close()
  }
})

rl.on('close', () => {
  const [a, b] = inputLines
  const result = parseInt(a) + parseInt(b)
  console.log(result + '');
})

// ###

// Solution

