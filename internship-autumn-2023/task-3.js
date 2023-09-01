const readline = require('readline')

function canWin(joeCards, winCards) {
  // [currCard]: cardNeeded
  const inconsistoncies = {}

  for (let i = 0; i < joeCards.length; i++) {
    const joeCard = joeCards[i]
    const winCard = winCards[i]

    if (joeCard !== winCard) {
      if (inconsistoncies[winCard] === joeCard) {
        delete inconsistoncies[winCard]
      } else {
        if (joeCard < winCard) return false

        inconsistoncies[joeCard] = winCard
      }
    }
  }

  return !Object.keys(inconsistoncies).length
}

function areSameCards(joeCards, winCards) {
  if (joeCards.length !== winCards.length) return false

  const joeCardsCounted = countNumbers(joeCards)
  const winSequenceCounted = countNumbers(winCards)

  return compareCountedDict(joeCardsCounted, winSequenceCounted)
}

function countNumbers(numbersSequence) {
  const countedNumbers = {}

  for (const number of numbersSequence) {
    if (!countedNumbers[number]) countedNumbers[number] = 0

    countedNumbers[number]++
  }

  return countedNumbers
}

function compareCountedDict(a, b) {
  for (const value in a) {
    if (a[value] !== b[value]) return false
  }

  return true
}

function readInput() {
  const lines = []
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.on('line', line => {
    lines.push(parseLineNumbers(line))

    if (lines.length === 3) {
      rl.close()
    }
  })

  rl.on('close', () => {
    const joeCards = lines[1]
    const winCards = lines[2]

    if (areSameCards(joeCards, winCards) && canWin(joeCards, winCards)) {
      console.log('YES')
    } else {
      console.log('NO')
    }
  })
}

function parseLineNumbers(str) {
  return str
    .trim()
    .split(' ')
    .map(item => parseInt(item))
}

readInput()
