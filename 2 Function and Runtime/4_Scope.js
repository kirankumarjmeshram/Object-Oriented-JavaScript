
const myName = 'Andrew';

function introduceMyself() {
  const you = 'student';

  function introduce() {
    console.log(`Hello, ${you}, I'm ${myName}!`);
  }

  return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'

let n = 2;

function myFunction() {
  let n = 8;
  console.log(n);
}

myFunction();
// 8

// When the following code runs, what is the output of the first, second, and third logs to the console (respectively)?

let x = 8;

function functionOne() {
  let x = 9;

  function functionTwo() {
    let x = 10;
    console.log(x);  // First log => 10
  }

  functionTwo();

  console.log(x);  // Second log => 9
}

functionOne();

console.log(x);  // Third log => 8

