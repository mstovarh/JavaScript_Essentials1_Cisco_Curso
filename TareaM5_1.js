﻿let numbers = [50, 10, 40, 30, 20];
let compareNumbers = (a, b) => {
    let retVal = 0;
    retVal = a > b ? 1 : -1
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]