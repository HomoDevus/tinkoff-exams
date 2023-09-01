const readline = require('readline')

function findMostExpensiveRevolver(revolversInStore, joesMoney) {
  let mostExpensiveRevolver = -Infinity

  for (let revolver of revolversInStore) {
    if (revolver > mostExpensiveRevolver && revolver < joesMoney) {
      mostExpensiveRevolver = revolver
    } else if (revolver === joesMoney) {
      return revolver
    }
  }

  return mostExpensiveRevolver === -Infinity ? 0 : mostExpensiveRevolver
}

function readInput() {
  const lines = []
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.on('line', line => {
    lines.push(parseLineNumbers(line))

    if (lines.length === 2) {
      rl.close()
    }
  })

  rl.on('close', () => {
    console.log(findMostExpensiveRevolver(lines[1], lines[0][1]))
  })
}

function parseLineNumbers(str) {
  return str
    .trim()
    .split(' ')
    .map(item => parseInt(item))
}

readInput()
