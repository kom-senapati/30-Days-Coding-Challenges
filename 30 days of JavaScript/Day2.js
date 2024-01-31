// Challenge 2:
// Write a JavaScript function that 
// accepts a string as a parameter and 
// converts the first letter of each word 
// into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function capitalizeWords(string) {
    return string.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

console.log(capitalizeWords('the quick brown fox'));