function jsonToMatrix(arr) {
  const keys = new Set()
  const matrix = [[]]

  function getKeys(obj, path = []) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        getKeys(obj[key], [...path, key])
      } else {
        keys.add([...path, key].join('.'))
      }
    }
  }

  for (let item of arr) {
    getKeys(item)
  }

  const sortedKeys = [...keys].sort()

  for (let key of sortedKeys) {
    matrix[0].push(key)
  }

  for (const item of arr) {
    const row = []

    for (const key of sortedKeys) {
      row.push(getFromPath(item, key))
    }

    matrix.push(row)
  }

  return matrix
}

function getFromPath(obj, path) {
  const splitPath = path.split('.')
  let currItem = obj

  for (const pathItem of splitPath) {
    if (currItem[pathItem] === undefined) {
      return ""
    }

    currItem = currItem[pathItem]
  }

  return currItem
}

console.log(jsonToMatrix([{ 'b': 1, 'a': 2 }, { 'b': 3, 'a': 4 }]))
console.log(jsonToMatrix([{ 'a': 1, 'b': 2 }, { 'c': 3, 'd': 4 }, {}]))
console.log(jsonToMatrix([
  { 'a': { 'b': 1, 'c': 2 } },
  { 'a': { 'b': 3, 'd': 4 } }
]))
console.log(jsonToMatrix([
  [{ 'a': null }],
  [{ 'b': true }],
  [{ 'c': 'x' }]
]))
console.log()