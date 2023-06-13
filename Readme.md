## Difference between let and const

- Variables declared with let are mutable, which means their values can be reassigned.
- Variables declared with const are immutable, meaning their values cannot be changed once assigned.
- Both let and const have block scope, which means they are only accessible within the block of code where they are defined.
- Variables declared with let can be reassigned with a new value at any time within their scope.
- Variables declared with const cannot be reassigned after their initial assignment. They are constant and their values remain the same throughout their lifetime.

(For complex data types like objects and arrays, the properties or elements can still be modified.)

### Arrow Functions

- an arrow function in JavaScript is a shorter and more concise way to write a function. It is denoted by the => syntax.

## Javascript Interview questions tips:

#### Important concept that asked in js

- set Time out
- placement of js files
- var let and const difference
- closures
- functional programming
- this keyword
- framework
- prototyping
- promise
- dounce vs throtle
- [refer this video](https://youtu.be/tOo9c6SK_do)

## Rest Operator

The rest operator in JavaScript is denoted by three dots (...). It is used within function declarations or function expressions to represent an indefinite number of arguments as an array. The rest operator allows you to gather the remaining parameters of a function into a single array, which can then be manipulated or iterated over.

## Modules

- A module in JavaScript is a self-contained unit of code that can be imported and used by other modules. Modules are used to break down large JavaScript applications into smaller, more manageable pieces. This makes code easier to understand, maintain, and test.

## Callback Function

- a callback function is a function that is passed as an argument to another function and is then invoked (called) within that function.

- The callback function is then executed by the other function when it is finished executing. Callbacks are often used in asynchronous programming, where a function needs to wait for another function to finish executing before it can continue.

- They allow you to write asynchronous code that is easier to read and understand.

- They can help you to avoid blocking the main thread, which can improve the performance of your code.

- They can be used to implement complex algorithms and data structures.

- Callbacks can be used in a variety of ways in JavaScript. They are often used to handle asynchronous events, such as mouse clicks, keyboard events, and network requests.

- Callbacks can also be used to implement complex algorithms and data structures.

## Asynchronous code

- Asynchronous code in JavaScript allows you to perform tasks without blocking the execution of other code. In simple words, it means that you can start a task and let it run in the background while your program continues to do other things.

- In synchronous code, each task is performed one after the other, blocking the execution until the current task is completed. This can be problematic if a task takes a long time to finish, as it may make the program unresponsive.

- With asynchronous code, you can start a task and move on to the next one without waiting for the previous task to finish. The task will execute independently, and once it's completed, a specified callback function is called to handle the result.

- This allows JavaScript to handle time-consuming operations, such as making network requests, reading and writing files, or performing complex calculations, without freezing the entire program. By leveraging asynchronous code, you can build more responsive and efficient applications.

## Synchronous code
- Synchronous code in JavaScript executes tasks in a sequential and blocking manner. It means that each task must complete before moving on to the next one, and the execution of other code is paused until the current task is finished.