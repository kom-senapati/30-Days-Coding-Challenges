// Challenge 3:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them falls within the range.

function within50and99(a, b) {
    return (50 <= a && a < 100) || (50 <= b && b < 100);
}

console.log(within50and99(69, 420));