function objDiff(obj1, obj2) {
  const diff = {}

  for (const [key1, value1] of Object.entries(obj1)) {
    const value2 = obj2[key1]

    if (
      (
        !isPrimitive(value1)
        && !isPrimitive(value2)
        && (Array.isArray(value1) ^ Array.isArray(value2))
      )
      || (
        isPrimitive(value1)
        && isPrimitive(value2)
        && value1 !== undefined
        && value2 !== undefined
        && value1 !== value2
      )
      || (
        value1 !== undefined
        && value2 !== undefined
        && typeof value1 !== typeof value2
      )
    ) {
      diff[key1] = [value1, value2]
    } else if (
      !isPrimitive(value1)
      && !isPrimitive(value2)
    ) {
      const locDiff = objDiff(value1, value2)

      if (Object.keys(locDiff).length > 0) {
        diff[key1] = locDiff
      }
    }
  }

  return diff
}

function isPrimitive(val) {
  return typeof val !== 'object' || val === null
}

console.dir(objDiff({}, {
  'a': 1,
  'b': 2
})) // {}
console.dir(objDiff({
  'a': 1,
  'v': 3,
  'x': [],
  'z': {
    'a': null
  }
}, {
  'a': 2,
  'v': 4,
  'x': [],
  'z': {
    'a': 2
  }
}))
/**
 * {
 *   "a": [1, 2],
 *   "v": [3, 4],
 *   "z": {
 *     "a": [null, 2]
 *   }
 * }
 */
console.dir(objDiff({
  'a': 5,
  'v': 6,
  'z': [1, 2, 4, [2, 5, 7]]
}, {
  'a': 5,
  'v': 7,
  'z': [1, 2, 3, [1]]
}), { depth: null })
/**
 * {
 *   "v": [6, 7],
 *   "z": {
 *     "2": [4, 3],
 *     "3": {
 *       "0": [2, 1]
 *     }
 *   }
 * }
 */
console.dir(objDiff({
  'a': { 'b': 1 }
}, {
  'a': [5]
})) // { "a": [{"b": 1}, [5]] }
console.dir(objDiff({
  'a': [1, 2, {}],
  'b': false
}, {
  'b': false,
  'a': [1, 2, {}]
})) // {}
console.dir(objDiff({ a: 1 }, { a: { b: 1 } }))