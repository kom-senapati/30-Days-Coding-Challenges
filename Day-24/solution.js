// Challenge 24
// Description:
// Implement a debounce function that takes a function 
// and a delay as arguments. The returned function 
// should ensure that the original function is not 
// called more than once in the specified delay.

function debounce(func, delay) {
    let timeoutId
    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function () {
            func.apply(this, args)
        }, delay)
    }
}

const myFunc = () => console.log("Hello World!")
const debouncedFunction = debounce(myFunc, 500)
debouncedFunction()
debouncedFunction()
setTimeout(debouncedFunction, 1000)