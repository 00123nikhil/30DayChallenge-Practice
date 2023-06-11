// ||--------------------- REvise ----------------||

let applications = (app) => {
  console.log(app);
};

applications("vs code");
applications("sublime text");
applications("github");
applications("pycharm");

// arrow 2
let addNums = (a, b) => console.log("addition of two nums are", a + b);
addNums(2, 3);

// arrow 3
let comments = (name) => console.log(`hey your name is ${name}`);
comments("xampayanio");

// ||------------------||
// passing value or parameter in functions
let invitationPeople = (name = "bot", time = "9pm") => {
  console.log(`welcome ${name} , the party start at ${time}`);
};

// calling function
invitationPeople("kira", "12am");

// ||------------------------||
// higher order function
let upperCase = (str) => str.toUpperCase();
let lowerCaseCase = (str) => str.toLowerCase();

let convertInto = (str, fun) => fun(str);

console.log("Uppercase", convertInto("naksh", upperCase));

// ||----------------------||
// immediately invoked function expression
// it is executed only once
(function (n) {
  console.log(`hey ${n} welcome to jumanji....!!!`);
})();

// ||----------------------------||

// Object in js
let OperatingSystems = {
  name: "windows",
  version: 10,
  year: 2017,
};

console.log(OperatingSystems);

// accessing
console.log(OperatingSystems.version);

// ||-----------------------------||
let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} Mr.${name}`);
  };
};
compliment("You are selected for this role")("Nikhil");

let GmailMsg = (sender) => {
  return function (msg) {
    console.log(`${sender} ${msg}`);
  };
};
GmailMsg("Nikhil")("you have new notification");

console.log("<<------------- Object in JS ------------->>");

let car = {
  color: "red",
  id: 43749,
  model: "2023QRR",
};
console.log(car);

// accessing object properties
console.log(`Color of car is `, car.color);
console.log(`id of car is `, car.id);
console.log(`model of car is `, car.model);

// Modify the object properties
car.color = "yellow";
// or
car["id"] = 29994;
console.log(car);

// Delete Object Properties
let flipkart = {
  bank1: "central bank of india",
  bank2: "Bank of Baroda",
  bank3: "state bank of india",
};
/* delete always return true -Tip */
delete flipkart["bank3"];
// or
delete flipkart.bank2;
console.log(flipkart);
