//  immediately invoked function expressions
/*  it is executed only once  */
console.log('<<---------- Immediately invoked function expressions ----------->>');
(function (name) {
    console.log(`${name} welcome to the jumanji...`);
})('Peter and Luckas');

// fun1
(function () {
    let x = 9;
    let y = 90;
    console.log(x + y);
})()



console.log('<<---------- SetInterval and SetTimeOut ----------->>');

// setinterval and settimeout
// setTimeOut : Run the function once after interval of time
// setTimeOut : Run the function repeatedily

function greeting() {
    console.log(`settimeout : 😎😎😎`);
}
// settimeout

// setTimeout(greeting, 1000)

// setInterval
// setInterval(greeting,2000)

/* YOu can passed function too  */

// setTimeout(function greet() {
//     console.log(`🍗 Magic in my bones!....`);
// }, 3000)


/** ------------- Object in js ------------------ */
console.log('<<------------- Object in JS ------------->>');

let car = {
    color: 'red',
    id: 43749,
    model: '2023QRR'
}
console.log(car);

// accessing object properties
console.log(`Color of car is `, car.color);
console.log(`id of car is `, car.id);
console.log(`model of car is `, car.model);


// Modify the object properties
car.color = 'yellow'
// or
car['id'] = 29994
console.log(car);


// Delete Object Properties
let flipkart = {
    bank1: 'central bank of india',
    bank2: 'Bank of Baroda',
    bank3: 'state bank of india',
}
/* delete always return true -Tip */
delete flipkart['bank3']
// or
delete flipkart.bank2;
console.log(flipkart);

console.log('<<--------- This keyword -------------->>');
const netflix = {
    Type: 'Webseries',
    year: 2023,
    Name: 'Asur 2',
    getDescription: function () {
        return `Today ${this.Name}  is released in ${this.year}`
    }
}

console.log(netflix.getDescription());