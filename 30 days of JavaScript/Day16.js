// Challenge 16
// Problem Description:
// Write a JavaScript function named sumArray that 
// takes an array of numbers and returns the sum of all 
// the numbers in the array using the reduce() method.

function sumArray(numbers) {
    return numbers.reduce((accumulator, current) =>
        accumulator + current, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]))
