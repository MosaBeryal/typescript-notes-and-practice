"use strict";
// String Array (only strings allowed)
let webDevelopment = ["js", "python", "expressjs", "fastAPI"];
// Union Type Array (strings and numbers allowed)
let devOps = ["cloud", "Containers", "CICD", "Pipelines", 100];
// Mixed Data Array (different types)
let mixedData = [1, true, "mosa"];
// This will cause an error because `webDevelopment` is an array of strings.
// webDevelopment[0] = 34; // Error: Type '34' is not assignable to type 'string'.
// This will not cause an error because `webDevelopment` can hold strings.
webDevelopment[1] = "C++";
// Adding a string to `devOps` (both strings and numbers are allowed).
devOps.push("beryal"); // No error: can push string or number
// Any type array (not recommended for type safety)
let test = [];
// Array of strings (only strings allowed)
let hobbies = [];
hobbies.push("reading"); // No error, 'reading' is a string.
// Tuple (fixed length and types for each position)
let myTuple = ["mosa", 2, true]; // Correct tuple with specific types in each position
// Trying to change the type of elements in a tuple will cause an error
// myTuple[0] = 42; // Error: Type '42' is not assignable to type 'string'.
// Objects
// `myObj` is of type `object`, but we can't access properties on it directly without knowing its structure
let myObj;
myObj = []; // Arrays are objects in TypeScript, so this is allowed.
// Example object for a student
const studentObj = {
    name: "mosa",
    reg: 3123,
};
const teacher = {
    name: "mosa",
    assignedCourse: "Advance Web Development",
    students: ["23", 3]
};
const user = {
    username: "mosa",
    userId: 2312,
    role: "admin"
};
// Function to display user details
const showUserDetails = (user) => {
    return `Hello ${user.username}!`; // Uses the `username` property from the User interface
};
console.log(showUserDetails(user)); // Output: Hello mosa!
