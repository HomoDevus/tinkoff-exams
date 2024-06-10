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
  const [len, numbers] = lines
  const result = findLongestBoringPrefix(parseNumbersLine(numbers), parseInt(len))
  console.log(result + '');
})

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

// ##########

// Solution
function findLongestBoringPrefix(numbers, len) {
  let numbersDict = {}

  for (let number of numbers) {
    if (!numbersDict[number]) {
      numbersDict[number] = 0
    }

    numbersDict[number]++
  }

  for (let rightIndex = len - 1; rightIndex > 1; rightIndex--) {
    if (isBoring(numbersDict)) {
      return rightIndex + 1
    }

    if (numbersDict[numbers[rightIndex]] === 1) {
      delete numbersDict[numbers[rightIndex]]
    } else {
      numbersDict[numbers[rightIndex]]--
    }
  }

  return 2
}

function isBoring(numDict) {
  let numDictValues = Object.values(numDict)
  let set = new Set(numDictValues)

  if (set.size === 2) {
    let numbers = [...set]
    if ((numbers[0] === 1 || numbers[1] === 1 || Math.abs(numbers[0] - numbers[1]) === 1) && hasOnlyOneDiff(numDictValues)) {
      return true
    }
  } else if (set.size === 1 && set.has(1)) {
    return true
  }

  return false
}

function hasOnlyOneDiff(numbers) {
  let filtered = numbers.filter(number => number === numbers[0])

  return filtered.length === 1 || filtered.length === numbers.length - 1
}
