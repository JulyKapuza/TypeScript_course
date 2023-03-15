// Function overloads

type Combination = string | number; //union type

// всі можливі комбінації з двома параметрами
// function add2(a: number): number // також модливо, якщо зробити b необовязковим
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add(1, 5)

const result = add2("July", " Kap") as string; // add2(a: string, b: string): string (+3 overloads)
result.split(" ");
