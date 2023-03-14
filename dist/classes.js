"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployees(emploee) {
        this.employees.push(emploee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department -ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getIntance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d3', []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department -ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Nick");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Max"]);
console.log(it);
it.addEmployees("Max");
it.addEmployees("Bob");
it.describe();
it.printEmployeeInfo();
const accounting = AccountingDepartment.getIntance();
accounting.mostRecentReport = "Year End Report";
accounting.addReports("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.describe();
accounting.printReports();
accounting.addEmployee("Anna");
accounting.addEmployee("Max");
accounting.printEmployeeInfo();
//# sourceMappingURL=classes.js.map