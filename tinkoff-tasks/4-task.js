function simplePolygonArea(apexAmount, sidesLength) {
  return (apexAmount * sidesLength ** 2) / (4 * getTanDeg(180 / apexAmount))
}

function simpleTriangleArea(sideLength) {
  return 0.4330127018922193 * (sideLength ** 2)
}

function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}

console.log(simpleTriangleArea(1))
console.log(simplePolygonArea(3, 1))