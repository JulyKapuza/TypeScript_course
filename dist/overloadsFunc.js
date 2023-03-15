"use strict";
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add2("July", " Kap");
result.split(" ");
//# sourceMappingURL=overloadsFunc.js.map