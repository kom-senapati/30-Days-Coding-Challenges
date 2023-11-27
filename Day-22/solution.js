// Challenge 22
// Problem Statement: Write a function to deeply 
// compare two objects for equality.

function compareObjects(obj1, obj2) {
    if (obj1 === null && obj2 === null) return true;
    else if (obj1 === null || obj2 === null) return false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;

    for (let key in obj1) {
        if (typeof obj1[key] !== 'object' || typeof obj2[key] !== 'object') {
            if (obj1[key] !== obj2[key])
                return false;
        }
        else {
            if (!compareObjects(obj1[key], obj2[key]))
                return false;
        }
    }
    return true;
}

const obj1 = { a: 1, b: [1, 2] };
const obj2 = { a: 1, b: [1, 2] };
console.log(compareObjects(obj1, obj2)); 