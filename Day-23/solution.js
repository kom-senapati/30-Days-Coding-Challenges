// Challenge 23
// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function 
// on each invocation. The returned function, when called, 
// should increment the counter value and return it.

function counter() {
    let i = 1;
    return function () {
        return i++;
    }
}

let Counter = counter()
for (let i = 0; i < 5; i++) {
    console.log(Counter())
}
