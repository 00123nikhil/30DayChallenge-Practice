// Prototype
/**
 * __Proto__ ---- this is accessor property
 *
 * recommended Object.getProtypeOf() and Object.setPrototypeOf() instead of proto
 */
// take as understanding
let animals = {
  eats: true,
  walks: function () {
    return "walking on road";
  },
};
let dog = { Bark: true };
dog.__proto__ = animals;

console.log(dog.eats);
console.log(dog.walks());

/**
 * Proporty of an object
 *
 * property config
 * 1.writable-true/false
 * 1.configurable-true/false
 * 1.enumberable-true/false
 * value: valueof property
 */
const fruitsList = {
  fruitName: "Mango",
};

// behind the scene
Object.defineProperties(fruitsList, {
  Property1: {
    value: "Mango",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

// ||-------------- classes -----------||
// before es6 |construtor function
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return this.name;
};
let user = new user("John wick");
User.sayHi();

// after | classes
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return this.name;
  }
}
let classUser = new User("kala");
classUser.sayHi();

// ||--------------------------||
// getter and setter
class NameTakers {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return this.firstname + "" + this.lastname;
  }

  // set fullname(_fullname) {
  //   this.firstname = _fullname.split("")[0];
  //   this.lastname = _fullname.split("")[1];
  // }

  set fullname(_fullname) {
    this.firstname = _fullname;
    this.lastname = _fullname;
  }
}

let person1 = new NameTakers("john", "cena");
person1.fullname; //john cena
person1.fullname = "nikhil Borse";

console.log(person1);

