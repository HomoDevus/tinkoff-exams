const readline = require('readline')

function createXorSet() {
  let xorSet = new Set()
  let maxXor = 0

  return function addNumber(number) {
    let prevSize = xorSet.size

    xorSet.add(number)

    if (prevSize !== xorSet.size && xorSet.size > 1) {
      // Find max xor operation
      for (let setNum of xorSet) {
        let xorAns = setNum ^ number

        if (xorAns > maxXor) {
          maxXor = xorAns
        }
      }
    }

    return maxXor
  }
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let linesAmount, numbersSet = createXorSet(), numbersAdded = 0

rl.on('line', function (cmd) {
  cmd = parseInt(cmd)

  if (linesAmount === undefined) {
    linesAmount = parseInt(cmd)
  } else {
    console.log(numbersSet(cmd))
    numbersAdded++

    if (numbersAdded >= linesAmount) {
      rl.close()
    }
  }
});

rl.on('close', function (cmd) {
  process.exit(0);
});

