// creating a promise
const PromiseOne = new Promise(function (resolve, reject) {
  // do Aync tasks
  setTimeout(() => {
    console.log("promise is created...");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
  console.log("promise is consumed");
});

// ----------------------||
/** creating promise without variable */
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("without para promise.");
    resolve();
  }, 1000);
}).then(() => {
  console.log("without para is consumed.");
});
// ----------------------||

const PromiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Nikhil", id: 209847 });
  }, 1000);
});

PromiseTwo.then((user) => {
  console.log(user);
});

// -------------------------||

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ Name: "Locke and Key", type: "Web Series" });
    } else {
      reject("ERROR : Something went Wrong.");
    }
  }, 1000);
});

PromiseThree.then((user) => {
  console.log(user);
  return user.Name;
})
  .then((Name) => console.log(Name))
  .catch((err) => console.log(err))
  .finally(() => console.log("--- Promise either resolve or rejected. ---"));

// using async and await to handle
const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ Name: "Farzi", type: "Web Series" });
    } else {
      reject("ERROR : Something went Wrong.");
    }
  }, 1000);
});

async function consumedPromiseFour() {
  try {
    const response = await PromiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumedPromiseFour();

/**------------------------------------------- */
// handle the fetch api using as following
async function AllUsers() {
  try {
    const response = await fetch("www.fakeyou.com/fake/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error through :", error);
  }
}
AllUsers();

/**
 * as above using then and catch
 */

fetch("https://www.fakeyou.com/fakeUser")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("E:", error));
