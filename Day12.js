// ||-----------------------------||

// Callback function
// A callback function in JavaScript is a function that is passed as an argument to another function
function sayHello() {
  console.log("Just hear me out.");
}

function sayGood() {
  console.log("That doesn't make sense.");
}

function add(num1, num2, callback) {
  console.log(num1 + num2);

  callback();
}

let a = 5;
let b = 9;

add(a, b, sayHello);
add(4, 3, sayGood);

// Callback Function ex 2

const greeting = () => {
  console.log("Greeting function :---> I will help you to figure it out");
};

function callingFun(MycallFun) {
  console.log("--------------------");
  console.log("this is function and below calling function as argument");
  MycallFun();
}

callingFun(greeting);

add(a, b, function () {
  console.log("------ Anonymous Function ----------");
  console.log("alleborate more please....");
});

//||------------------------------------------||

// callback function example
console.log("---- callback example ----");
const calculate = (x, y, operation) => {
  return operation(x, y);
};

// calling function
const multiplication = calculate(4, 6, function (num1, num2) {
  return num1 * num2;
});
const addtion = calculate(1, 2, function (num1, num2) {
  return num1 + num2;
});

console.log(multiplication);
console.log(addtion);

const substraction = (s, z) => s - z;
const substractionResult = calculate(34, 10, substraction);
console.log(substractionResult);

// ||----------------- Map Function -----------------||
// without map function

let arr = [2, 3, 4, 5, 6];
// print result like this [4,6,8,10,12]

let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  arr1[i] = arr[i] * 2;
}
console.log("----- Map Function without using Example ----");
console.log(arr1);

// with map function
console.log("----- using map function | anonymous -----");
let arr2 = arr.map(function (value) {
  return value * 2;
});
console.log(arr2);

let arr3 = arr.map((val) => val * 3);
console.log("---- using map | arrow function ----");
console.log(arr3);

// ||----------------------- Practice ----------------------||

function phoneBook() {
  let arr = ["rahul", "rushi", "kedar", "sushi", "riku"];
}

function callBook(phoneBook) {
  console.log("Please call the following numbers urgently.");
  phoneBook();
}

callBook(phoneBook);

// adding own anonymous function
callBook(function () {
  let a = 90;
  let b = 89;
  let c = a + b;
  console.log("addition of a and b is", c);
});
// ------------------------------------------
function Iphone() {
  const details = {
    price: 1500000,
    Model: "Iphone 14",
  };
  console.log(details);
}

function Android() {
  const details = {
    price: 1500000,
    Model: "Samsung S22 ",
  };
  console.log(details);
}

function PhoneDetails(Category, callback) {
  console.log("Category", Category);
  callback();
}
console.log("---- PhoneDetails ----");
let a1 = PhoneDetails("android", Android);
console.log(a1);

let b1 = PhoneDetails("Iphone", Iphone);
console.log(b1);

// ||-----------------------------------||

const notification = () => console.log("You got new Notification");
const voiceMessage = () => console.log("You have 1 voice message");

function MyPhone(Msg) {
  Msg();
}

MyPhone(notification);
MyPhone(voiceMessage);
