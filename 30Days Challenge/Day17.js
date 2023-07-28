// ||-------------------------||
// objects
let AddressObject = {
  city: "Sambhaji Nagar",
  state: "Maharashtra",
};

let PersonDetails = {
  name: "Nimish",
  address: AddressObject,
};

console.log(PersonDetails);

// ------------ instead of nested
let Person = {
  name: "Nimish",
  address: {
    city: "Pune",
    state: "Maharashtra",
  },
};

console.log(Person);

// ||-------------------- Copying: Shallow copy ------------------||
/**
 * Object.assign();
 * Object ---> is a inbuild constructor
 * assign() ---> a method
 */
let shallowCopy = Object.assign({}, AddressObject);
// shallowCopy.city = "Napur";
console.log(shallowCopy, AddressObject);

let s_Copy = Object.assign({}, Person);
console.log(s_Copy);
// s_Copy.address.city='Suraj'
// this is not well shallow copying changing orig and copy
// console.log(s_Copy,Person);

const person1 = {
  name: "nikhil",
  address: {
    city: "Cha.Sambhaji Nagar",
    state: "MH",
    rulae:{

    }
  },
};
// using spread
let addCopy = { ...person1 };
// console.log(addCopy);

/**
 * Deep copy :using json.parse and json.stringify functions
 *
 * In JavaScript, a deep copy refers to creating a new object or array that not only copies the top-level structure but also creates new copies of all nested objects and arrays. This ensures that modifications made to the original object or array do not affect the deep copy, and vice versa.
 */

/**
 * Using Json
 * Note: This method works well for simple objects and arrays, but it has limitations. It won't work for objects with
 *
 */
const originalObject = { a: "Street Boys", b: { c: "spotify" } };
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopyObject);

// ------------ Practice --------------
const person = {
  name: "John",
  age: 30,
  address: {
    street: "t1 t434 hellwadi",
    city: "Hellnagar",
    country: "Hell",
  },
  hobbies: ["take soul ", "killing peoples"],
};

console.log(person.name);
console.log(person.address.street);
console.log(person.hobbies[0]);

person.age = 35;
person.address.city = "cannot city";
person.hobbies.push("targeting");

console.log(person.age);
console.log(person.address.city);
console.log(person.hobbies);

// ||------------ Function >> -----------||
/**Named function expression(NFE)
 */
let sayHello = function fx(user) {
  if (user) {
    return "Hello " + user;
  } else {
    return fx("Hey everybody welcome here.");
  }
};
let print = sayHello("nikhil");
console.log(print);

let noprint = sayHello();
console.log(noprint);

// Advanced topics>>Decorator (wrapper )>> mostly asked. <Important>

// Object.entries() method ===> converting object to map
let x = {
  s1: "good",
  s2: "bad",
};
let showMap = Object.entries(x);
console.log(showMap);



let a=[3,4,5]

console.log(a);
const [c,b]=a

// arry destructing 