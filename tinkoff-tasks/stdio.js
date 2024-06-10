let readline = require('readline');

let a, b

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (cmd) {
  if (a === undefined) {
    a = parseInt(cmd)
  } else {
    b = parseInt(cmd)
    rl.close()
  }
});

rl.on('close', function (cmd) {

  console.log(a + b);
  process.exit(0);
});