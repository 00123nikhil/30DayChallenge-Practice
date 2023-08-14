// Constructor Function | OOPS in Javascript
console.log("---- Constructor Function ----");

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

// creating object
const JohnAccount = new BankAccount("John Wick", 50000000);
const NikhilAccount = new BankAccount("Nikhil B", 6000000);
// console.log(JohnAccount, NikhilAccount);
// check specific a/c number
// console.log("Customer Account number : ", NikhilAccount.accountNumber);

// ------------ My Bank -----------------
console.log("---- SBI Bank , India ----");
function SBIAccount(customerName, balance = 1000) {
  this.customerName = customerName;
  this.balance = balance;

  this.Deposit = (amount) => (this.balance += amount);
  this.Withdraw = (amount) => (this.balance = this.balance - amount);
}

const Person1 = new SBIAccount("Nikhil", 85000);
const Person2 = new SBIAccount("Suraj", 80000);
const Person3 = new SBIAccount("Kamraj", 75000);
const Person4 = new SBIAccount("mandya");

// changing the amount of peson account
Person1.Deposit(5000);
// console.log(Person1);

Person2.Withdraw(5000);
// console.log(Person2);

// ||-------------------------------||
// Copy object and array | deep vs shallow copy

const fruits = ["mango", "banana"]; // origianl array
const newFruits = fruits; //newfruit copied array
console.log(fruits);
console.log(newFruits);

const added = fruits;
added.push("pista", "almond", "dates");
console.log(added);
console.log(fruits);

added[5] = "suraj";
console.log(added);

const num1 = [3, 543, 643];
const num2 = num1;
console.log(num2);

const Names = [
  {
    Person1: "Nik",
    id: 45315,
  },
  {
    Person2: "alex",
    id: 432515,
  },
  {
    Person3: "nancy",
    id: 452315,
  },
  {
    Person4: "mandy",
    id: 45315,
  },
  {
    Person5: "dean",
    id: 4545,
  },
];

console.log(Names);

const Add_New_Names = Names;
// console.log(Add_New_Names);
// Add_New_Names.push({
//   Person2: "Nihi",
//   id: 56564,
// });
// console.log(Add_New_Names);

const FiveMoreAdded = [
  {
    Person1: "Nik33",
    id: 45315,
  },
  {
    Person2: "alex323",
    id: 432515,
  },
  {
    Person3: "nancy32",
    id: 452315,
  },
  {
    Person4: "mandy45",
    id: 45315,
  },
  {
    Person5: "dean43",
    id: 4545,
  },
];

// ||-------------------------||
//  In js,a promise is good way to handle asyc opeartion. it is used to find out if the async operation is successfully completed or not.
/**
 * a promise may have one of three states
 * 1.pending
 * 2.fulfilled
 * 3.Rejected
 * */
