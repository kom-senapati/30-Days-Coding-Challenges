// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223

function reverseNumber(number) {
    let reversed = 0;
    while (number) {
        let digit = number%10;
        reversed = reversed*10 + digit;
        number = Math.floor(number/10);
    }
    return reversed;
}

console.log(reverseNumber(32243));