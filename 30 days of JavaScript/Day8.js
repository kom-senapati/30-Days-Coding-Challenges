// Challenge 8
// Write a JavaScript function to get all possible 
// subsets with a fixed length (for example 2) 
// combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2]]

function getSubsets(arr, l) {
    let subsets = [];
    for (let i = 0; i < Math.pow(2, arr.length); i++) {
        let s = i.toString(2).padStart(arr.length, '0');
        if (s.split('1').length - 1 !== l) continue;
        let subset = [];
        for (let j = 0; j < arr.length; j++) {
            if (s[j] === '1') subset.push(arr[j]);
        }
        subsets.push(subset);
    }
    return subsets;
}
console.log(getSubsets([1,2,3],2))
