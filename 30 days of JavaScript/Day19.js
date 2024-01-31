// Challenge 19
// Problem Description:
// Write a JavaScript function named allPositive that 
// checks whether all numbers in a given array are 
// positive using the every() method.

function allPositive(array) {
    return array.every(n => n > 0)
}

console.log(allPositive(
    [-1, 2, 3, 4, -5]
))

console.log(allPositive(
    [1, 2, 3, 4, 5]
))
