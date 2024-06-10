const readline = require('readline')

/**
 * @param {number} n - Number of cities
 * @return {number[]}
 */
function getAllWorkdaysSequences(n) {
  let currentWorkDays = new Array(n).fill(0)
  let possibleWorkdays = []
  let index = 0

  while (index < n) {
    if (currentWorkDays[index] === 0) {
      for (let j = 0; j < index; j++) {
        currentWorkDays[j] = 0
      }

      currentWorkDays[index] = 1
      index = 0
      possibleWorkdays.push([...currentWorkDays]);
    } else {
      index++
    }
  }

  return possibleWorkdays
}

/**
 * Get all paths that lead to target city.
 * @param {number} numberOfCities
 * @param {number} numberOfPaths
 * @param {object[]} flights
 * @param {number} flights.from
 * @param {number} flights.to
 * @param {0|1} flights.workDays - If airport works on even days equal to 1, if on odd equal to 0
 * @return {flights[]}
 */
function getPossiblePaths(numberOfCities, numberOfPaths, flights) {
  let paths = []

  /**
   * Follow path. If it leads to the end city, then add it to paths array.
   * @param {number} start
   * @param {number} stepCount
   * @param {flights[]} path
   */
  function followPath(start, stepCount, path) {
    if (start === numberOfCities) {
      paths.push(path)
    } else {
      for (let flight of flights) {
        if (flight.from === start) {
          followPath(flight.to, stepCount + 1, [...path, flight])
        }
      }
    }
  }

  followPath(1, 1, [])

  return paths
}


/**
 *
 * @param {object[]} paths
 * @param {number} paths.from
 * @param {number} paths.to
 * @param {0|1} paths.workDays
 * @param {number[]} sequencesOfWorkingDays - all possible sequences
 * @return {array}
 */
function findLongestPath(paths, sequencesOfWorkingDays) {
  let longestWorkingDays, longestPath = 0

  for (let workingDays of sequencesOfWorkingDays) {
    let sequenceLongestPath = -1

    // Check if we can follow that path using this workingDays sequence
    for (let path of paths) {
      let isValidPath = true

      for (let step of path) {
        if (workingDays[step.from - 1] !== step.workDays) {
          isValidPath = false
          break
        }
      }

      // Update longest path
      if (isValidPath && path.length > sequenceLongestPath) {
        sequenceLongestPath = path.length
      }
    }

    // If there no valid path for this sequence of working days it is a blocking path
    // There can be nothing longer than blocking sequence, so we return this path
    // Otherwise update longest path and go on iterating other working days options
    if (sequenceLongestPath === -1) {
      return [-1, workingDays]
    } else if (sequenceLongestPath > longestPath) {
      longestPath = sequenceLongestPath
      longestWorkingDays = workingDays
    }
  }

  return [longestPath, longestWorkingDays]
}

function parseNumberString(string) {
  return string.trim().split(' ').map(num => parseInt(num))
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let numberOfCities, numberOfPaths, flights = []

rl.on('line', function (cmd) {
  cmd = parseNumberString(cmd)

  if (numberOfCities === undefined || numberOfPaths === undefined) {
    numberOfCities = cmd[0]
    numberOfPaths = cmd[1]
  } else {
    flights.push({ from: cmd[0], to: cmd[1], workDays: cmd[2] })

    if (flights.length === numberOfPaths) {
      rl.close()
    }
  }
});

rl.on('close', function (cmd) {
  let possibleSequences = getAllWorkdaysSequences(numberOfCities)
  let possiblePaths = getPossiblePaths(numberOfCities, numberOfPaths, flights)
  let answer = findLongestPath(possiblePaths, possibleSequences)
  answer[1] = answer[1].join('')
  console.log(answer.join('\n'))
  process.exit(0);
});