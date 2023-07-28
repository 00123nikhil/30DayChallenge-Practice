/**
 * Practice.js ----
 * this is rough page given by me. chill out.
 */

// ||---------------------------------------||

// function gumsum(gum) {
//   return gum - gum;
// }

// function displaygum(fn) {
//   console.log("the subtraction is " + fn(4));
// }

// displaygum(gumsum)

// (function multi(a) {
//   console.log(a * a);
// })(5);

// (function sum(a) {
//   return (function (y) {
//     console.log(a);
//   })(4);
// })(3);

const user = {
  fristname: "peter",
  getName() {
    const fristname = "alex";
    return this.fristname;
  },
};

console.log(user.getName());
