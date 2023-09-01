const readline = require('readline')

function formInitialGangs(spiritsAmount) {
  const gangs = []

  for (let spirit = 1; spirit <= spiritsAmount; spirit++) {
    gangs.push({ [spirit]: 1 })
  }

  return gangs
}

function mergeGangs(spiritA, spiritB, gangs) {
  const gangAIndex = getSpiritGang(spiritA, gangs)
  const gangBIndex = getSpiritGang(spiritB, gangs)
  const updatedGangs = []

  if (gangAIndex === gangBIndex || gangAIndex === -1 || gangBIndex === -1)
    return gangs

  for (let i = 0; i < gangs.length; i++) {
    const gang = gangs[i]

    if (i !== gangAIndex && i !== gangBIndex) {
      updatedGangs.push(gang)
    } else if (i === gangAIndex) {
      const mergeGang = { ...gangs[gangAIndex], ...gangs[gangBIndex] }

      for (const gangKey in mergeGang) {
        mergeGang[gangKey]++
      }

      updatedGangs.push(mergeGang)
    }
  }

  return updatedGangs
}

function isInSameGang(spiritA, spiritB, gangs) {
  const gangAIndex = getSpiritGang(spiritA, gangs)
  const gangBIndex = getSpiritGang(spiritB, gangs)

  if (gangAIndex === gangBIndex) return true
  else return false
}

function gangsAmount(spirit, gangs) {
  const spiritGang = getSpiritGang(spirit, gangs)

  return gangs[spiritGang][spirit]
}

function getSpiritGang(spirit, gangs) {
  for (let i = 0; i < gangs.length; i++) {
    const gang = gangs[i]

    if (gang[spirit]) return i
  }

  return -1
}

function readInput() {
  const lines = []
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.on('line', line => {
    lines.push(parseLineNumbers(line))

    if (lines.length === lines[0][1] + 1) {
      rl.close()
    }
  })

  rl.on('close', () => {
    const spiritsAmount = lines[0][0]
    const questions = lines.slice(1)
    let gangs = formInitialGangs(spiritsAmount)

    for (const question of questions) {
      if (question[0] === 1) {
        gangs = mergeGangs(question[1], question[2], gangs)
      } else if (question[0] === 2) {
        console.log(
          isInSameGang(question[1], question[2], gangs) ? 'YES' : 'NO',
        )
      } else if (question[0] === 3) {
        console.log(gangsAmount(question[1], gangs))
      }
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
