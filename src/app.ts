// intersection types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Jul",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combine = string | number; //union type
type Numeric = number | boolean;

type Universal = Combine & Numeric; // type number перетин на ньому

function add1(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployeeInfo = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployeeInfo) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    // перевірка на наявність властивості
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    // перевірка на наявність властивості
    console.log("startDate: " + emp.startDate);
  }
}
printEmployeeInfo(e1); // ok console.log with privileges

printEmployeeInfo({ name: 'Bob', startDate: new Date()}) // ok console.log without privileges
