"use strict";
// Basic Types 
const firstName = "Mosa"; // Explicitly defining type improves readability
const lastName = "Beryal"; // Explicitly defined type for clarity
let age = 20;
let married = false;
// * We can set any datatype value, but using 'any' is not recommended.
// * Instead, consider using 'unknown' or a union type if possible.
let album = true;
// Regular Expression
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Union type: It can hold either a string or a number.
let registrationNumber;
// Function with explicitly defined return type
const sum = (a, b) => {
    return a + b;
};
