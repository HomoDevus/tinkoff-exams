let readline = require('readline');

/**
 * @param {string} name
 * @param {string} paintIdea
 * @return {number}
 */
function countNotBeautifulLetters(name, paintIdea) {
  let notBeautifulAmount = 0
  let splitPaintIdea = [] // Array of colors split by words length
  name = name.split(' ')

  // Separate colors array by words length
  let prevEndIndex = 0
  for (let word of name) {
    splitPaintIdea.push(paintIdea.slice(prevEndIndex, prevEndIndex + word.length))
    prevEndIndex = word.length
  }

  // Count arrays containing same color twice in a row
  for (let wordColors of splitPaintIdea) {
    for (let i = 1; i < wordColors.length; i++) {
      if (wordColors[i] === wordColors[i - 1]) {
        notBeautifulAmount++
        break
      }
    }
  }

  return notBeautifulAmount
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', function (cmd) {
  input.push(cmd)

  if (input.length >= 3) {
    rl.close()
  }
});

rl.on('close', function (cmd) {
  console.log(countNotBeautifulLetters(input[1], input[2]))
  process.exit(0);
});