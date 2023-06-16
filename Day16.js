// javascript Interview Ask Topics
// let var const and scope

// global scope
let a = 1;
let b = 7;
console.log(a);

// block scope
// let
{
  let a = 8;
  let b = "string";
  console.log(a);
}
{
  let a = "another scope";
  let b = 4;
  //   reassignment is allowed.| redeclare not allowed.
  b = "good morning";
  console.log(b);
}

{
  var os = "windows";
  var os = "macos";
  console.log(os);
}

// ------------------------------
// -------- var :not have any scope ------------
{
  var c = 1024;
  console.log(c);
}

{
  // var c=3
  console.log(c);
}

var c = 45;
/**
 * Temporal Dead Zone: mostly asked.
 * global objects
 * lexicial environment
 */

// let vs var
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

// ||-------------------||
/**
 * closure:the outside of param name and inside of greerting is accessible to your welcomewish1 that called closure.
 */
function Wishes(name) {
  let greeting = "welcome ";
  function greet() {
    return greeting + name + " " + "you are promoted.";
  }
  return greet;
}

let welcomeWish1 = Wishes("Nikhil");
console.log(welcomeWish1());

// ||---------------------||
// IIFE
(function (a) {
  var x = a;
})(3);

// ||---------------- Curring or closure----------------||
function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a, b, c);
      return a + b + c;
    };
  };
}
// above closure or curring

console.log(sum(3)(4)(6));

let add = (a) => (b) => (c) => a + b + c;
console.log(add(4)(6)(9));

// examples of curring
let Win_System_Log = (time) => (type) => (msg) =>
  `at ${time} : Type: ${type} => ${msg}`;

// console.log(
//   Win_System_Log(new Date())("Critical error")("Your battery is low...")
// );

let Log1 = Win_System_Log(new Date());
Log1("warning")("syntax error");

let Log2 = Win_System_Log(new Date())(" critical Alert");
Log2("winter is coming.");
console.log(Log2("winter is coming"));
