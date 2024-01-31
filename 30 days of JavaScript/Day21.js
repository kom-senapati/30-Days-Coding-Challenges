// Challenge 21
// Problem Statement: Write an asynchronous loop 
// function that iterates over an array and 
// performs an asynchronous operation on each element.

async function asyncLoopFunction(array, async_function) {
    for (const num of array) {
        await async_function(num)
            .then(() => console.log("0 or Positive Number"))
            .catch(() => console.log("Negetive Number"))
    }
}
async function PositiveOrNegetive(param) {
    return new Promise((resolve, reject) => {
        if (param >= 0) resolve()
        else reject()
    })
}

const numbers = [-1, 0, 1]
asyncLoopFunction(numbers, PositiveOrNegetive)