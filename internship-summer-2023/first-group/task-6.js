function buildMedianArr(borders, maxMarksSum) {
  let mid = borders.length / 2
  let medianArr = []
  // borders.sort(a, b => )

  for (let i = 0; i < borders.length; i++) {
    let border = borders[i]

    if (i < mid) {
      medianArr.push(border[0])
    } else if (i >= mid) {
      medianArr.push(border[1])
    }
  }

  let overload = maxMarksSum - sum(medianArr)

  while (overload > 0) {

  }
}

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b)
}

// function compareFn(a, b) {
//   let aToLeft = a[0]
//   let aToRight = maxMarksSum - a[1]
//   let bToLeft = b[0]
//   let bToRight = maxMarksSum - b[1]
//
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
