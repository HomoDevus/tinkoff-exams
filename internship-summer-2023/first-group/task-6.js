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
  inputLines.push(parseNumbersLine(line.toString()))
})

rl.on('close', () => {
  const [[len, maxMarks], ...borders] = inputLines
  const result = buildMedianArr(borders, maxMarks)
  console.log(result);
})

// ##########

// Solution
function buildMedianArr(borders, maxMarksSum) {
  if (borders.length === 1) return borders[0][1]

  borders.sort((a, b) => a[1] - b[1] || a[0] - b[0])

  let mid = Math.floor(borders.length / 2)
  const medianArr = borders.map(border => border[1])
  let overload = sum(medianArr) - maxMarksSum
  let change

  function decreaseSum() {
    for (let index = 0; index < medianArr.length && overload > 0; index++) {
      if (mid === index) index++

      change = Math.min(medianArr[index] - borders[index][0], overload, index > 0 ? medianArr[index] - medianArr[index - 1] : Infinity)

      medianArr[index] -= change
      overload -= change
    }
  }

  decreaseSum()

  while (overload > 0) {
    change = Math.min(Math.floor(overload / (medianArr.length - mid)), medianArr[mid] - medianArr[mid - 1]) || 1
    medianArr[mid] -= change
    overload -= change
    decreaseSum()
  }

  return medianArr[mid]
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}
