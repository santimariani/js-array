'use strict';

// const myFunction = (string, integer) => {
//     const newArray = [];
//     for (let i = 0; i < integer; i++) {
//         newArray.push(string);
//     }
//     return newArray;
// }

// const solutionArray = myFunction("sunshine", 3);

// console.log(solutionArray);

const sourceArray = [1, 2, 3, 4, 5]

function flipArrayValues (array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
const flippedArray = flipArrayValues(sourceArray);

console.log(flippedArray);