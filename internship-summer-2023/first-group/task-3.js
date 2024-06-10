// Input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on('line', line => {
  lines.push(line.toString())

  if (lines.length === 2) {
    rl.close()
  }
})

rl.on('close', () => {
  const [len, str] = lines
  const result = findShortestGoodSubstring(str, parseInt(len))
  console.log(result + '');
})

// ##########

// Solution
function findShortestGoodSubstring(string, length) {
  const UNIQUE_AMOUNT = 4
  let step = UNIQUE_AMOUNT
  let leftIndex = 0
  let rightIndex = step

  while (step <= length) {
    while (rightIndex <= length) {
      if (new Set(string.slice(leftIndex, rightIndex)).size === UNIQUE_AMOUNT) {
        return rightIndex - leftIndex
      }

      leftIndex++
      rightIndex++
    }

    step++
    leftIndex = 0
    rightIndex = step
  }

  return -1
}