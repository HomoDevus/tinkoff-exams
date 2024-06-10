// Input
function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

process.stdin.on('data', data => {
  numbers = parseNumbersLine(data.toString())
  const result = isMonotonic(numbers)
  process.stdout.write(result + '');
  process.exit();
});

// ##########

function isMonotonic(arr) {
  let isIncreasing = true
  let isDecreasing = true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isDecreasing = false
    } else if (arr[i] < arr[i - 1]) {
      isIncreasing = false
    }

    if (!isIncreasing && !isDecreasing) {
      return 'NO'
    }
  }

  return 'YES'
}
