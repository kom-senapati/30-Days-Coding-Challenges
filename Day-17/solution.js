// Challenge 17
// Problem Description:
// Write a JavaScript function named filterOutOdd that 
// uses the filter() method to filter out odd numbers 
// from an array.

function filterOutOdd(array) {
    return array.filter(num => !(num & 1 == 1))
}

console.log(filterOutOdd(
    [1, 2, 3, 4, 5, 6, 7, 8]
))