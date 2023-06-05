// ||-------------------- ES6 ----------------------||
// Rest ... ---> used in functions

let AddNums = (...Nums) => {
    // it give you numbers in array form
    console.log(...Nums);
}
// AddNums(4, 5, 6, 7, 8)
// ||--------------------------------||

// For of Loop in JS
const ForNums = [1, 2, 3, 4];
// console.log('--- For of loop ---');
// for (const forN of ForNums) {
//     console.log(forN);
// }

// for of loop in string
const language = 'Javascript';
// console.log('--- For of loop ---');
// for (const char of language) {
//     console.log(char);
// }

// for of loop in object
/* for of is not applied in object directly 
you have to make object as iterative  */

const Ott = {
    jiocinema: 'Asur 2',
    netflix: 'stranger things',
    anime: 'death Note'
};

// for (const webseries of Ott) {
//     console.log(webseries);
//     //  TypeError : OTT is not iterable 
// }
console.log('--- for of loop ---');
for (const a of Object.entries(Ott)) {
    console.log(a);
}

console.log('--- For of loop ---');
for (const [key, value] of Object.entries(Ott)) {
    console.log(key, "=>", value);
}

// ||---------------------------------||

// find method (array method)
const asur = [
    {
        name: 'subh'
    },
    {
        name: 'DJ'
    }
]
// find method can iterate two times 
// if the condtion is true it will break the loop
// it is optimized way to find or search items in objects

console.log('--- find method ---');
const AsurName = asur.find((e) => {
    return e.name === 'subh'
})
// console.log(AsurName);

// find index method ===> return index of items

console.log('--- findIndex method ---');
const AsurName1 = asur.findIndex((e) => {
    return e.name === 'subh'

})
// console.log(AsurName1);

// ||-----------------------------||

// sets
// ===================== ERrOR
// const uniqueNumbers = new set();
// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add(2);
// uniqueNumbers.add(4);
// console.log(uniqueNumbers);
// ===================== ERROR 

// const numbers = [1, 3, 4, 5, 5, 6, 7];
// const uniqueNumbers=new set(numbers);
// console.log(uniqueNumbers);
// ============================ERROR OCCURS


// ||-------------------------------||

// rest
let num1 = [2020, 2021, 2022, 2023, 2024, 2025]
const [year1, year2, ...year3] = num1;

console.log(year1);
console.log(year2);
console.log(year3);



let webSeries = {
    name: 'Asur 2',
    date: '2023',
    episodes: '8',
    comments: 'gaand fadu'
}
const { nm, date, ...all } = webSeries;

console.log('--- rest practice ---');
console.log(nm);
console.log(date);
console.log(all);


// objects
const tables = {
    id: 001,
    mail: 'demo001@gmail.com',

    id: 002,
    mail: 'demo001@gmail.com',

    id: 003,
    mail: 'demo001@gmail.com',

    id: 004,
    mail: 'demo001@gmail.com',
}