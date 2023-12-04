// Challenge 29
// Description:
// Write a function raceWithTimeout that takes an array of 
// promises and a timeout value. The function should 
// resolve when the first promise resolves or reject if 
// none resolve within the given timeout.

function raceWithTimeout(promises, timeout) {
    return Promise.race([
        Promise.race(promises),
        new Promise((_, reject) => {
            setTimeout(() => reject(new Error("TIMEOUT")), timeout);
        })
    ]);
}

const promiseA = new Promise((resolve) =>
    setTimeout(() => resolve('A'), 1000));

const promiseB = new Promise((resolve) =>
    setTimeout(() => resolve('B'), 1500));

raceWithTimeout([promiseA, promiseB], 1500)
    .then(res => console.log("RESOLVED: ", res))
    .catch(err => console.log("REJECTED: ", err.message));
