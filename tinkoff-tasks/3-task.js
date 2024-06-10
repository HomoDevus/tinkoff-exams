const readline = require('readline')

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function NOK(a, b) {
  let aInitial = a
  let bInitial = b

  while (a && b) {
    if (a > b) {
      a %= b
    } else {
      b %= a
    }
  }

  return Math.abs(aInitial * bInitial / (a + b))
}

/**
 * @param {number} n
 * @return {(number|number)[]}
 */
function getWinner(n) {
  let a = 1, b = n - 1
  let min = Infinity
  let minNums

  // Find minimal NOK
  while (b !== 1) {
    let nok = NOK(a, b)
    if (nok < min) {
      min = nok
      minNums = [a, b]
    }
    a++
    b--
  }

  return minNums
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input

rl.on('line', function (cmd) {
  input = parseInt(cmd)
  rl.close()
});

rl.on('close', function (cmd) {
  console.log(getWinner(input).join(' '))
  process.exit(0);
});

