// ||--------------- Operators -------------------||

// arithematic op
// let x = 5;
// let y = 6;
// let z = x * y;

// increment and decrement op
// let z = 8;
// z++; //z=8+1
// z--;

// comparison op
// let a = 50;
// let b = 18;
// let c = a == b;

// not equals to -- it checks it is not equal to or not
// let c = a!=b; //it is equal to -- false or if not equal -- true

// greater than less than
// let c=a>b;
// let d=a<b;

// logical 
// let a = true;
// let b = false;
// let c = a && b;
// let c = a || b;

// ternary op
// c = a > b ? 'yes' : 'no'
// document.getElementById('show').innerHTML = c;

// Assignment op
let a = 5;
let z = 7;

// add and assignment +=
// z=z+a ---- z=5+7=12
// z += a;

// subtract and assignment -=
z -= a;
// document.getElementById('show').innerHTML = z;


// calculate
// function calculate() {
//     let first = document.getElementById('first').value;
//     let second = document.getElementById('second').value;
//     let operator = document.getElementById('operator').value;

//     if (operator == '+') {
//         let result = parseInt(first) + parseInt(second);
//     }
//     if (operator == '-') {
//         let result = parseInt(first) - parseInt(second);
//     }
//     if (operator == '*') {
//         let result = parseInt(first) * parseInt(second);
//     }
//     if (operator == '/') {
//         let result = parseInt(first) / parseInt(second);
//     }
//     document.getElementById('result').value = result;
// }


// ||--------------------------------||

// foreach loop --- give data from array and objects
let cars = ['car1', 'car2', 'car3'];
cars.forEach(res);

function res(item, index) {
    console.log(index + " => " + item);
}

// ||----------------------------------||

// loose equality vs strict equality op
// loost equality ==
// loose equality check only values not type.

let age = 23;
console.log(age == '23');// true

// strict equality ===
// check both values and type 

console.log(age === '23');// false