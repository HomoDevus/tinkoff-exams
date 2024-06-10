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
  let leftIndex = 0
  let rightIndex = string.length

  if (!isGood(string)) {
    return -1
  }

  while (isGood(string.slice(leftIndex, rightIndex))) {
    leftIndex++
  }
  leftIndex--

  while (isGood(string.slice(leftIndex, rightIndex))) {
    rightIndex--
  }
  rightIndex++

  return rightIndex - leftIndex
}

function isGood(str) {
  return new Set(str).size === 4
}