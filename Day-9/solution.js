// Challenge 9
// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

function firstUnique(str) {
    let charCounts = {};
    for (const char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCounts[char] === 1) return char;
    }
    return null;
}

console.log(firstUnique("abacddbec"));
