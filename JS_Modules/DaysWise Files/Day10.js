
// foreach method in array
// its another type of loop which is used to traverse
export let age = [18, 19, 20, 21, 22, 23, 24];

console.log('---- using loop ----');
for (let i = 0; i < age.length; i++) {
    console.log(age[i]);
}

// using foreach loop
// console.log('---- for each loop ----');
// age.foreach(function (ele) {
//     console.log(ele);
// })

// ||-------------------------------||
// object inside array
export let blocklist = [
    { username: 'ajay', age: 29 },
    { username: 'atul', age: 30 },
]

// ||--------------------------------||

// call and apply method
export let IndianaPlane = {
    airline: 'fly india',
    code: 'C6845',
    booksits: function (fightnum, name) {
        console.log(`${name} booked filght ${this.airline}`);
    }
}