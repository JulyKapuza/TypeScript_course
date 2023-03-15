"use strict";
const e1 = {
    name: "Jul",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Bob', startDate: new Date() });
//# sourceMappingURL=intersection.js.map