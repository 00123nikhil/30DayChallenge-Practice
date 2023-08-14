// Import all files here
import { MobileConversation, englishWords, ageCalculation } from "./DaysWise Files/Day09.js";
import { IndianaPlane, blocklist } from "./DaysWise Files/Day10.js";


// ||--------------------- Modules --------------------||

// Day 09 
console.log('<<--------- Day09 App.js --------->>');

console.log(MobileConversation);

console.log(englishWords);

console.log("Your age in 2023 is", ageCalculation(1999));

// ||------------------- Day10 ------------------------||


for (let i = 0; i < blocklist.length; i++) {
    console.log(blocklist[i]);
}

IndianaPlane.booksits(445, 'alex miller')
console.log(IndianaPlane);