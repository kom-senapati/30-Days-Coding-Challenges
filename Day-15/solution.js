// Challenge 15
// Problem Description -
// create a string_chop function that takes a string 
// and chop factor(size) and chops out the string into 
// the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']

function string_chop(inputString, chopSize = 0) {
    if (chopSize === 0) return [inputString];

    let resultArray = [];
    let index = 0;

    while (index < inputString.length) {
        try {
            resultArray.push(inputString.substr(index, chopSize));
        } catch (error) {
            while (chopSize !== 0) {
                try {
                    resultArray.push(inputString.substr(index, chopSize));
                } catch (error) {
                    chopSize--;
                }
            }
        }
        index += chopSize;
    }
    return resultArray;
}
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler', 2));
