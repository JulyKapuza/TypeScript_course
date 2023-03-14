"use strict";
const addNumber = (...arg) => {
    return arg.reduce((acc, currentItem) => {
        return acc + currentItem;
    }, 0);
};
const addedNumber = addNumber(1, 2, 8, 3, 5, 9, 10);
console.log(addedNumber);
const hobbies = ['Sport', "Dancing", "Reading"];
const [hobby1, hobby2, ...nextHobbies] = hobbies;
console.log(hobbies, hobby2, hobby1);
//# sourceMappingURL=newJS.js.map