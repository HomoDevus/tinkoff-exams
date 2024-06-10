// Input
function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

process.stdin.on('data', data => {
  numbers = parseNumbersLine(data.toString())
  const result = codeReview(...numbers)
  process.stdout.write(result + '');
  process.exit();
});

// ##########

// Solution
function codeReview(juniors, seniors, assesments) {
  return Math.ceil(juniors * assesments / seniors)
}
