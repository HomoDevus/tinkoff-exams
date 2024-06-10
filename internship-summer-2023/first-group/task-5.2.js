function buildPrefixTable(numbers) {
  let prefixTable = [0]

  for (let i = 0; i < numbers.length; i++) {
    prefixTable.push(numbers[i] + prefixTable[i])
  }

  return prefixTable
}

function rsq(l, r, prefixTable) {
  return prefixTable[r] - prefixTable[l - 1]
}

function findReasonableSubstrings(prefixTable) {
  let step = 1
  let leftIndex = 1
  let rightIndex = leftIndex + step
  let reasonableSubstringsAmount = 0

  for (let leftIndex = 0; leftIndex < prefixTable.length; leftIndex++) {
    for (let rightIndex = leftIndex; rightIndex < prefixTable.length; rightIndex++) {

    }
  }

  while (step < prefixTable.length) {
    while (rightIndex < prefixTable.length) {
      if (rsq(leftIndex, rightIndex, prefixTable) === 0) {
        reasonableSubstrings.push([leftIndex - 1, rightIndex - 1])
      }

      leftIndex++
      rightIndex++
    }

    step++
    leftIndex = 0
    rightIndex = leftIndex + step
  }

  return reasonableSubstrings
}

function countNormalSubstrings(numbers, reasonableSubstrings) {
  let step = 1
  let leftIndex = 0
  let rightIndex = step
  let counter = 0

  while (step <= numbers.length) {
    while (rightIndex < numbers.length) {
      for (let reasonableSubstring of reasonableSubstrings) {
        if (leftIndex <= reasonableSubstring[0] && rightIndex >= reasonableSubstring[1]) {
          counter++
          break
        }
      }

      leftIndex++
      rightIndex++
    }

    step++
    leftIndex = 0
    rightIndex = step
  }

  return counter
}

function run(numbers) {
  let prefixTable = buildPrefixTable(numbers)
  let reasonableSubstrings = findReasonableSubstrings(prefixTable)
  return countNormalSubstrings(numbers, reasonableSubstrings)
}

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

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
  const [_, numbers] = lines
  const result = run(parseNumbersLine(numbers))
  console.log(result + '');
})