function countLetters(lettersToCount, word) {
  const countedLetters = {}

  for (const letter of lettersToCount) {
    countedLetters[letter] = 0
  }

  for (const letter of word) {
    if (lettersToCount.has(letter)) {
      countedLetters[letter]++
    }
  }

  return countedLetters
}

function getAmountOfWords(countedLetters, lettersAmount) {
  const entriesAmount = Object.entries(countedLetters).map(
    ([letter, entries]) => Math.floor(entries / lettersAmount[letter]),
  )

  return Math.min(...entriesAmount)
}

process.stdin.on('data', data => {
  const WORD = 'sheriff'
  const LETTERS_TO_COUNT = new Set(WORD.split(''))
  const LETTERS_AMOUNT = countLetters(LETTERS_TO_COUNT, WORD)

  const result = getAmountOfWords(
    countLetters(LETTERS_TO_COUNT, data.toString()),
    LETTERS_AMOUNT,
  )

  process.stdout.write(result.toString())
  process.exit()
})

function parseNumbersLine(str) {
  return str
    .trim()
    .split(' ')
    .map(item => parseInt(item))
}
