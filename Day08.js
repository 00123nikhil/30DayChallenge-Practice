// Objects
/* In JavaScript, an object is a collection of key-value pairs, where the keys are strings and the values can be any data type, including other objects. */

// simple object

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// nested objects

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       state: "NY",
//       zip: "10001"
//     }
//   };

// Objects with methods
// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     subtract: function (a, b) {
//         return a - b;
//     }
// };

// object constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//     };
// }

// const john = new Person("John", 30);
// john.greet();

// object with array properties
// const groceryList = {
//     items: ["apples", "bananas", "bread", "cheese"]
//   };



// swpaing values
// let myfood = 'burger'
// let yourfood = 'pizza'
// let tempfood = myfood
// myfood = yourfood;
// yourfood=tempfood
// console.log('myfood:: burger and yourfood::pizza || after swapping values')
// console.log(`my food is`, myfood, `your food is`, yourfood);

// you can swipping by 
let myfood = '🍉'
let yourfood = '🍗'

[myfood, yourfood] = [yourfood, myfood]
// console.log(myfood, yourfood);



// instead of you can write as
// const getpriceByName = (name) => {
//     if (name === '🙂') {
//         return 30
//     }
// }else if (name === '🖥️') {
//     return 20
// }
// }

// YOU CAn WRlite as
const getpriceByName = (name) => {
    const foodname = {
        '🙂': 2,
        '🖥️': 34
    }
    return foodname[name]
}
// console.log(getpriceByName('🖥️'));


const food = [
    {
        name: 'burger',
        group: 1
    },
    {
        name: 'Pizza',
        group: 1
    },
    {
        name: 'fastfood',
        group: 2
    },
]

// const names = [];
// for (let i = 0; len = food.length; i < len, i++) {
//     if (food[i].group === 1) {
//         names.push(food[i].name)
//     }
// }

// INSTEAD OF YOU CAN USE MAP 
const names = food
    .filter((food) => food.group === 1)
    .map((food) => food.name)
// console.log(names);