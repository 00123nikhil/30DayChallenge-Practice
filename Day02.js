// passing the value or parameter in functions

let invitation = function (name = 'Unknown', time = '8pm') {
    console.log(`Welcome ${name}, the party will start at ${time}`);
}

// call the function
invitation('Nikhil', '10pm')
invitation()

console.log('--- --- --- --- --- --- ');

let greetings = name => `hey ${name} welcome to our 5 star hotel.`
console.log(greetings('Nikhil'));

let greetings1 = (a, b, c, d) => {
    let x = 4;
    let y = 6;
    let z = 9;
    let xy = 90;

    console.log(a + x);
    console.log(b + y);
    console.log(c + z);
    console.log(d + xy);
}

greetings1(4, 5, 6, 7)

console.log('--- --- --- --- --- --- ');
function normalFun() {
    console.log('hey this is normal function ');
    let x = 9;
    let y = 94;

    console.log(x + y)
}

normalFun()

let add = (a, b) => {
    console.log(`the addition is`, a + b);
}
let subract = (a, b) => {
    console.log(`the subraction is`, a - b);
}

add(1, 2);
subract(7, 2);

console.log('\n');

// hof higher order function

let upperCase = (str) => str.toUpperCase();
let lowerCase = (str) => str.toLowerCase();

let ConvertTo = (str, fun) => fun(str);

console.log(`Converting into uppercase --->`, ConvertTo('will smith', upperCase));
console.log(`Converting into lowercase --->`, ConvertTo('JOHN WICK', lowerCase));

console.log('||=========================||\n');
let compliment = function (msg) {
    return function (name) {
        console.log(`${msg} Mr.${name}`);
    }
}
compliment('You are selected for this role')('Nikhil')



let GmailMsg = (sender) => {
    return function (msg) {
        console.log(`${sender} ${msg}`);
    }
}
GmailMsg('Nikhil')('you have new notification')