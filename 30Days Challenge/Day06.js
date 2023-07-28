import { square, cube } from "./Day05.js";

// ||-------------------- Day06 Classes --------------------||

// Classes 
// before es6

function Person(name) {// this normal or constructor fun too
    this.name = name;
}

// creating object 
const Nikhil = new Person('Nikhil');
const Suraj = new Person('Suraj');
console.log('--- before ES6 ---');
console.log(Suraj);

Suraj.name = 'Dev Suraj';
console.log(Suraj);
// ------------- After the ES6 --------------

class Asur {
    constructor(Name) {
        this.Name = Name;
    }

    comment() {
        console.log(`${this.Name} watched online`);
    }
}

const Person1 = new Asur('Asur Suraj');
const Person2 = new Asur('Asur Nikhil');
console.log('---- After ES6 ----');
console.log(`Watched asur 2 in one day is`, Person1);
console.log(`Watched asur 2 in week is`, Person2);

Person1.comment();
// ||-----------------------------||

// Inheritance in js
class SBI {
    constructor(name, acno) {
        this.name = name;
        this.acno = acno;
    }

    registration() {
        console.log(`Account Holder name : ${this.name}`);
        console.log(`Holder Account number : ${this.acno}`);
    }
}

class CBI extends SBI {

}

const Person3 = new SBI('John Wick', 'TTOO6479BQAAt');
const Person4 = new SBI('Asur Subh', 'TT003904Abii');

// console.log(Person3,Person4);
Person3.registration();
Person4.registration();

console.log('\n Propeties from SBI into CBI ');
const Person5 = new CBI('Dhananjay Rajput', '58935TTTOHTE');
const Person6 = new CBI('Om Pandey', '58935ORAWEOT');

Person5.registration();

// ||-------------------------------||

// ESM (ES6 Modules)

console.log('\n --- Modules in JS ---');
console.log(square(5));
console.log(cube(5));


// Data for practice
const netfix = ['1899', 'adv of sabrina', 'Alice in borderland', 'halo', 'Stranger things', 'wednesday Addams', 'shadow and bones', 'the black night', 'red rose', 'the last of us', 'cobra kai', 'the midnight club', 'the queen gamblit', 'umbrella academy', 'willow']

const years = [2001, 2002, 2003, 1374, 8543, 9547, 00543, 4202, 2020, 2045, 5934]


