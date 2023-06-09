/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */
// interface для опису структури об'єкта/ функції

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
user1.greet("Hi there - I am");
console.log(user1);

// interface Person {
//     name: string;
//     age: number;

//     greet(phrase:string): void;
// }

// let user1: Person

// user1 = {
//     name: "Julia",
//     age: 29,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name)
//     }
// }
// user1.greet('Hi there - I am')
