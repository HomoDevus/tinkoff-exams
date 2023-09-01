const readline = require('readline')

function getCash(bills, sumToGet) {
  function getBill(denominations, sumToGet) {
    if (sumToGet === 0) return {}
    else if (!denominations.length) return

    const currentDenomination = denominations[0]
    const avalivableNotes = bills[currentDenomination]
    const notesToGive = Math.min(
      Math.floor(sumToGet / currentDenomination),
      avalivableNotes,
    )

    for (
      let currNotesAmount = notesToGive;
      currNotesAmount >= 0;
      currNotesAmount--
    ) {
      const ressult = getBill(
        denominations.slice(1),
        sumToGet - currNotesAmount * currentDenomination,
      )

      if (ressult) {
        return currNotesAmount
          ? { [currentDenomination]: currNotesAmount, ...ressult }
          : ressult
      }
    }
  }

  const denominations = Object.keys(bills)
    .sort((a, b) => b - a)
    .map(Number)

  return getBill(denominations, sumToGet)
}

function toOutputFormat(bills) {
  if (!bills) {
    return '-1'
  } else {
    const result = []

    for (const note in bills) {
      for (let leftNotes = bills[note]; leftNotes > 0; leftNotes--) {
        result.push(note)
      }
    }

    return result.length + '\n' + result.join(' ')
  }
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
    const sumToGet = lines[0][0]
    const denominations = lines[1].reduce((acc, curr) => {
      acc[curr] = 2
      return acc
    }, {})

    console.log(toOutputFormat(getCash(denominations, sumToGet)))
  })
}

function parseLineNumbers(str) {
  return str
    .trim()
    .split(' ')
    .map(item => parseInt(item))
}

readInput()
