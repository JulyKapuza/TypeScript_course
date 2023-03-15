abstract class Department {
  // name: string;
  static fiscalYear = 2023;
  protected employees: string[] = []; // як private але доступний не тфльки в цьому класі,але і в тому що extends

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void; // клас реалізує базовий функціонал, але сам по собі він ніколи не створюватиме екземпляри, лише його дочірні класи, тоді він за визначенням абстрактний.
  addEmployees(emploee: string) {
    this.employees.push(emploee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department -ID: " + this.id);
  }
  // Маємо додати метод, яку реалізують класи, що наслідують Department Non-abstract class 'ITDepartment' does not implement inherited abstract member 'describe' from class 'Department'
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    // private constructor одноелементний шаблон один екземпляр визначеного класу, коли потрібен рівно один об'єкт на основі класу
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getIntance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d3", []);
    return this.instance;
  } // практика не часто

  describe() {
    console.log("Accounting Department -ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Nick"); //static визиваєм без ключового слова NEW
console.log(employee1, Department.fiscalYear);

// const accountingtest = new Department("d1", "Accounting");
// accountingtest .employees[2] = "Anna" //помилка, тому що додано private
const it = new ITDepartment("d1", ["Max"]);
console.log(it);

it.addEmployees("Max");
it.addEmployees("Bob");

it.describe();
it.printEmployeeInfo();

// const accounting = new AccountingDepartment("d3", []);
const accounting = AccountingDepartment.getIntance();

accounting.mostRecentReport = "Year End Report";
accounting.addReports("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.describe();
accounting.printReports();

accounting.addEmployee("Anna");
accounting.addEmployee("Max"); // не добавиться
accounting.printEmployeeInfo();
