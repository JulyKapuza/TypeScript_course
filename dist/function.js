"use strict";
function add(n1, n2) {
    const result = n1 + n2;
    return result;
}
let combineValues;
combineValues = add;
console.log(add(8, 7));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 15, (result) => {
    console.log(result);
});
//# sourceMappingURL=function.js.map