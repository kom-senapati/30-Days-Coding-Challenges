// Challenge 26
// Description:
// Write a function calculateTotal that takes an array 
// of numbers, filters out the even numbers, squares the 
// remaining numbers, and then calculates their sum.

function calculateTotal(array) {
    return array.filter(n => (n & 1 === 1))
        .map(n => n ** 2)
        .reduce((acc, cur) => acc + cur, 0)
}

console.log(calculateTotal(
    [1, 2, 3, 4, 5]
))