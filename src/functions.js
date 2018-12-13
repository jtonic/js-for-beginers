
function sum(a, b) {
  console.log(`summing up ${a} and ${b}`);
  return a + b;
}

function greeting(msg, name) {
  console.log(`${msg} ${name}`);
}
let s = sum(1, 2);
console.log(s);

greeting("Hi, ", "Antonel");

let s2 = sum(1);
console.log(s2);

let n1;
const sum3 = sum(1, n1);
console.log(sum3);

let a = undefined;
console.log(a, 1, a + 1);
console.log(sum);
console.log(typeof(sum));
