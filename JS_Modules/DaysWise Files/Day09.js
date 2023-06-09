
export let englishWords = [
    {
        dailysentence1: 'stop yelling'
    },
    {
        dailysentence2: 'he gigled'
    },
    {
        dailysentence3: 'time files'
    },
    {
        dailysentence4: 'I overslept'
    },
    {
        dailysentence5: 'nice timing'
    },
]

export const MobileConversation = ['I beg your pardon', 'I am sorry', 'I didnt get you', 'excuse me']

// ||---------------------------------------||
// functions 

// declareation
function letCurrent() {
    console.log('hey letcurrent.....');
}

// function call
letCurrent();


// Function Expressions
let FunExpress = function () {
    // also call as anonymous function
    console.log('Function expressions .....');
}

// function calling expression
FunExpress();

// Returning values
export let ageCalculation = function (birthyear, currentYear = 2023) {
    let age = currentYear - birthyear;
    return age;
}
