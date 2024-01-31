// Challenge 18
// Problem Description:
// Write a JavaScript function named doubleValues that 
// takes an array of numbers and returns a new array 
// where each number is doubled using the map() method.

function doubleValues(array) {
    return array.map(n => 2 * n)
}

console.log(doubleValues(
    [1, 2, 3]
))