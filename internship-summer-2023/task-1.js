function isOrdered(arr) {
  let isIncreasing
  if (arr.length < 2) return 'YES'

  for (let i = 1; i < arr.length; i++) {
    if (isIncreasing === undefined) {
      if (arr[i] > arr[i - 1]) {
        isIncreasing = true
      } else if (arr[i] < arr[i - 1]) {
        isIncreasing = false
      }
    } else if (arr[i] !== arr[i - 1] && (isIncreasing && arr[i] < arr[i - 1]) || (!isIncreasing && arr[i] > arr[i - 1])) {
      return 'NO'
    }
  }

  return 'YES'
}

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

process.stdin.on('data', data => {
  numbers = parseNumbersLine(data.toString())
  const result = isOrdered(numbers)
  process.stdout.write(result + '');
  process.exit();
});