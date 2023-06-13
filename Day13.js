// ||-------------- Promise ----------------||
// creating a promise
console.log("---- Promise and callback ----");
// this is synchronous code -keep it.
const ticket = new Promise(function (resolve, reject) {
  const isboarded = true;
  if (isboarded) {
    resolve("You are in flight");
  } else {
    reject("Your flight has been cancalled.");
  }
});

// calling the promise
ticket
  .then((data) => {
    console.log("welcome!", data);
  })
  .catch((data) => {
    console.log("we are sorry!", data);
  })
  .finally(() => {
    console.log("<<-AirIndia Flight Pvt Ltd->>");
  });

// ||------------------------------||

// simple asynchronous code
// function getCheese() {
//   setTimeout(() => {
//     const cheese = "🧀";
//     console.log("here is your cheese", cheese);
//   }, 3000);
// }
// getCheese()

// promise with asyn code only creating not calling.
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      console.log("here is your cheese", cheese);
      // promise
      resolve(cheese);
    }, 2000);
  });
}
// console.log(getCheese());

//||-------------------------------------||

// array methods
const a = [4, 5, 6, -1, -2, 9, 78];

const firsNegtiveNum = (num) => {
  return num < 0;
};

const findResult = a.find(firsNegtiveNum);
const IndexOfRes = a.findIndex(firsNegtiveNum);
console.log("---- array methods | find() ----");
console.log(findResult);
console.log(IndexOfRes);

// ||--------------------------------||
// callback
function getCheese(call) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("this is a ", cheese);
    call(cheese);
  }, 2000);
}

getCheese((cheese) => {
  console.log("got a cheese", cheese);
});

// ||-------------------- Filter Function -------------||

let numbers = [1, 2, 3, 44, 65, 7, 8, 89];
// using filter the greater number than 10
let arr = numbers.filter((val) => val > 10);
console.log(arr);

// example
let DevTeam = [
  {
    name: "Nikhil",
    position: "Android Developer",
  },
  {
    name: "Suraj",
    position: "FrontEnd Developer",
  },
  {
    name: "mandar",
    position: "backend Developer",
  },
  {
    name: "shubh",
    position: "Asur Developer",
  },
];

let Android_Dev = DevTeam.filter((val) => val.position == "Android Developer");
console.log("---- Filter Android Developer as below ----");
console.log(Android_Dev);
