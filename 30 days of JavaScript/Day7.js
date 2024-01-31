// Challenge 7
// Write a JavaScript program to check a pair of numbers 
// and return true if one of the numbers is 50 
//              or if their sum is 50.

function checkNumbers(a,b) {
    return (a === 50) || (b === 50) || (a+b === 50)
}

console.log(checkNumbers(20,30))      
                                                                  