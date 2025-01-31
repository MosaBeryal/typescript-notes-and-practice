// Basic Types 

const firstName: string = "Mosa"; // Explicitly defining type improves readability
const lastName: string = "Beryal"; // Explicitly defined type for clarity

let age: number = 20;
let married: boolean = false;

// * We can set any datatype value, but using 'any' is not recommended.
// * Instead, consider using 'unknown' or a union type if possible.
let album: unknown = true;

// Regular Expression
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Union type: It can hold either a string or a number.
let registrationNumber: string | number;

// Function with explicitly defined return type
const sum = (a: number, b: number): number => {
  return a + b;
};
