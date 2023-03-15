function add(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(add(8, 7));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 15, (result) => {
  console.log(result);
});
