"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAge = combine("30", "26", "as-number");
console.log(combineAge);
const combineString = combine("type", "Script", "as-text");
console.log(combineString);
//# sourceMappingURL=union.js.map