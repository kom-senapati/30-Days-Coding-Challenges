// Challenge 4:
// Write a JavaScript program to find 
// the area of a triangle where three sides are 5, 6, 7.

function calculateArea(a, b, c) {
    let s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

console.log(calculateArea(5, 6, 7))