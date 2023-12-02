// Challenge 27
// Description:
// Write a generator function range that takes two 
// arguments, start and end, and yields all the numbers in 
// that range.

const range = function* (start, end) {
    for (let i = start; i < end; i++) 
        yield i
}

for (let n of range(1, 6)) 
    console.log(n)