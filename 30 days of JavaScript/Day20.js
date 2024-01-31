// Challenge 20
// Problem Description:
// Write a JavaScript function named findFirstNegative 
// that finds and returns the first negative number 
// in an array using the find() method.

function findFirstNegative(array) {
    return array.find(x => x < 0)
}

console.log(findFirstNegative(
    [1, 2, -3]
))
console.log(findFirstNegative(
    [1, 2, 3]
))