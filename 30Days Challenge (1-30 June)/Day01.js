
// var product = 'laptop';
// var product = 'computer';

// console.log(product);
// in this code the product are declared two times and it override by var.
// but let cannot let you override and pollute your code
// let product = 'laptop'
// let product = 'computer'


// javascript hoisting
// console.log(product);
// var age = 67;

// const assign is not allowed.
// const age1 = 945
// age1 = 9
// console.log(age1);

// but you can change in object
// let myobject = {
//     years: 34
// }
// // you can change by this way in object
// myobject.years = 100;
// console.log(myobject);

// // but you cannnot change by this way
// years = 898;
// this can be asked in interviews.


// ---------------------------------------------
// arrow functions
// ---------------------------------------------
// function greetings() {
//     console.log('welcome to this javascript basic.');
// }

// let greetings = () => console.log('welcome to the jumanji');
// let additions = (a, b) => console.log(a + b);

// greetings();
// additions(5, 7)



// let welcomeMsg = () => {
//     console.log("hey this is welcome page");
// }



/* === Arrow Function Examples === */

// let multiplyNum = (a, b) => a * b;

// console.log(`The multiplication of two numbers are`, multiplyNum(4, 5));

// let comments = (name) => {
//     console.log(`hey , ${name} welcome to the jumaji`);
// }
// comments('Nikhil')


let nameofPerson = (a, b, c) => {
    console.log(`The sum of three numbers is :`, a + b + c);
}

nameofPerson(3, 4, 6);



// function normalFun(a, b, c) {
//     console.log(`Hi, ${a} 🙂🙂🙂`);
//     console.log(`Hi, ${a} 🙂🙂🙂`);
//     console.log(`Hi, ${a} 🙂🙂🙂`);
// }




let newObject = {
    name: 'suraj',
    id: 437497,
    title: 'fakhea'

}


function obj(test) {
    // console.log(`The name of person  is ${newObject.name}`);
    // console.log(` the id of person is ${newObject.id}`);
    console.log(` the title of person is ${test.title}`);
}

