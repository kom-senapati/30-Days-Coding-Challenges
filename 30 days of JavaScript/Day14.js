// Challenge 14

// Write a JavaScript function to concatenate 
// a given string n times (default is 1). 
// Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));

// Outputs
// "Ha!"
// "Ha!Ha!"

function repeat(string, n=1) {
    return string.repeat(n);
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));