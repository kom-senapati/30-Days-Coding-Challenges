// Challenge 30
// Description:
// Implement a throttle function that ensures a given 
// function is not called more than once in a specified 
// time interval.

function throttle(func, delay) {
    let isThrottled = false;
    return function (...arguments) {
        if (!isThrottled) {
            isThrottled = true;
            func.apply(this, arguments);
            setTimeout(() => {
                isThrottled = false;
            }, delay);
        }
    };
}

const throttledFunction = throttle(
    () => console.log("This function is being throttled"), 2000
);
throttledFunction();
throttledFunction();
