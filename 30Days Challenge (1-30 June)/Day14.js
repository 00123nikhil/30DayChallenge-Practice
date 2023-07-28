// Cookies in js
// Cookies in JavaScript are small pieces of data that websites can store on a user's computer or device. They are primarily used to remember information about the user or their preferences and can be accessed by both the server and the client-side JavaScript code.

// document.cookie = "item=milk";
// you can set expiry to cookie
// document.cookie = "loc=india; expires=sat 14 mar 2023 12:00:00 UTC";

// ||-------------------- JSON -------------------||

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is widely used for transmitting data between a server and a web application. In JavaScript, you can work with JSON using built-in functions and methods to parse and stringify JSON data.

/**
 * 1.Parse Json
 * convert json string ===> Javascript Object
 * JSON.parse(); Function
 *
 * 2.stringify Json
 * convert javascript object ===> Json string.
 * JSON.Stringfy() Function
 */

// json string
const JsonString = {
  name: "John Wick",
  age: 35,
  city: "New York",
};

const convertedObject = JSON.parse(JsonString);
// ???DemoShowOnly.

// Once you have parsed a JSON string into a JavaScript object, you can access its properties using dot notation or bracket notation.
console.log(convertedObject.name);
console.log(convertedObject.age);

// stringify string
const obj = {
  name: "LaLasa",
  age: 102,
  city: "parlok at hell",
};
const ConvertedJson = JSON.stringify(obj);
console.log(ConvertedJson);

// ||------------------ REst and Spread Revise --------------||
/**
 * spread: unpacks the elements --> single
 * rest: packs the elements --> couple
 */

// spread op
const number1 = [1, 3, 6, 7]; // packed elements
const NewNumber1 = [...numbers]; //unpacking the elements
console.log(NewNumber1);

// merge the numbers
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const mergeNums = [...num1, ...num2];
console.log(mergeNums);

/**
 * Practice.js ----
 * this is rough page given by me. chill out.
 */

// ||---------------------------------------||

// spread op

// compose
const composeNums = ["Initial", ...num1, ...num2, "Final"];
console.log(composeNums);

// spread in string
const Movie = "Aadi Purush";
const Json = "Javascript Object Notation";
console.log([...Movie]); // convert into ar
console.log(...Json);

// clone (shallow cloning )
const Terms = {
  MNC: "Universal term",
  MNS: "Suraj term",
};

const newTerms = {
  ...Terms,
};
console.log(newTerms);

// merging and cloning heavily use by companies.

// merge 2 objects
const NosqlDB = {
  type1: "Key value db",
  type2: "Document based db",
};

const Nosql_db_types = {
  ...newTerms,
  ...NosqlDB,
};
console.log(Nosql_db_types); // X not showing.

// Rest Op
// used in functions
function sum(...numbers) {
  console.log("Added nums ", numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log(sum(3, 4, 5, 6));

// add the array
const num3 = [5, 8, 9, 43, 53];
console.log(sum(...num3));

// --------------------

function sum(num1, num2, ...numbers) {
  console.log("Added nums ", numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log(sum(1, 2, 3, 4));

// ||----------------------------||
const Max_Purchased_Product_Backend = [
  300, 456, 97, 123, 456, 234, 560, 674, 56, 1024,
];
console.log(
  "Maximum numbers purchased value",
  Math.max(...Max_Purchased_Product_Backend)
);

// -----------------
const MobileSpec = {
  name: "Samsung S23",
  ram: "8 GB",
  storage: "128GB",
};

const { name, ...spec } = MobileSpec;
console.log(name, spec);

// ||---------------------------------------||

// spread
// q1. create 2 arrays and put first arry element into second array without using indexing.
console.log("------ Practice Set ------\n");
const Phones = ["Samsung S22", "Motorola A53", "readmi Pro", "Iphone 14"];
const NewPhones = [...Phones];
console.log(NewPhones);

const Time = () => {
  let Years = [2020, 2021, 2022, 2023, 2024, 2025];
  let months = ["months", "12", "|"];
  let days = ["days", "365", "|"];
  let hours = ["Hours", "24", "|"];

  console.log(...hours, ...days, ...months, ...Years);
};

Time();

// clone
const Team1 = {
  student1: "Nikhil",
  student2: "Suraj",
  student3: "Kamraj",
};

const Team2 = {
  Student4: "Subh",
  student5: "Asur",
};

const ColllabTeam = {
  ...Team1,
  Student6: "DJ",
  Student7: "om Panday",
};

console.log(ColllabTeam);

const newcollab = {
  ...Team1,
  ...Team2,
};

console.log(newcollab);

const sql = {
  fullform: "structural query language",
};
const dbms = {
  fullform: "database management system",
};

// ------------------------||
const typesofDb = {
  ...sql,
  ...dbms,
};
console.log(typesofDb);
// you cannot spread two things simultaneosuly.
// -------------------------||

let fav1 = [1, 2, 3, 4, 5];
let fav2 = [345, 56, 433, 42];
let favfav = [...fav1, ...fav2];
console.log(favfav);

const MInMaxValue = [1, 2, 4, 6, 7, 90, 3, 45, 67, 333];
console.log("Min value", Math.min(...MInMaxValue));
console.log("Max value", Math.max(...MInMaxValue));

const var1 = "Mother of dragon";
console.log(...var1);
console.log([...var1]);
