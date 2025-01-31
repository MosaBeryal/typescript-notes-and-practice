// String Array (only strings allowed)
let webDevelopment: string[] = ["js", "python", "expressjs", "fastAPI"];

// Union Type Array (strings and numbers allowed)
let devOps: (string | number)[] = ["cloud", "Containers", "CICD", "Pipelines", 100];

// Mixed Data Array (different types)
let mixedData: (number | boolean | string)[] = [1, true, "mosa"];

// This will cause an error because `webDevelopment` is an array of strings.
// webDevelopment[0] = 34; // Error: Type '34' is not assignable to type 'string'.

// This will not cause an error because `webDevelopment` can hold strings.
webDevelopment[1] = "C++";

// Adding a string to `devOps` (both strings and numbers are allowed).
devOps.push("beryal"); // No error: can push string or number

// Any type array (not recommended for type safety)
let test: any[] = [];

// Array of strings (only strings allowed)
let hobbies: string[] = [];
hobbies.push("reading"); // No error, 'reading' is a string.

// Tuple (fixed length and types for each position)
let myTuple: [string, number, boolean] = ["mosa", 2, true]; // Correct tuple with specific types in each position

// Trying to change the type of elements in a tuple will cause an error
// myTuple[0] = 42; // Error: Type '42' is not assignable to type 'string'.

// Objects

// `myObj` is of type `object`, but we can't access properties on it directly without knowing its structure
let myObj: object;

myObj = []; // Arrays are objects in TypeScript, so this is allowed.

// Example object for a student
const studentObj = {
  name: "mosa",
  reg: 3123,
};

// This would cause an error, as `reg` is already locked to a number
// studentObj.reg = true; // Error: Type 'true' is not assignable to type 'number'

// Using `type` for defining a teacher structure
type Teacher = {
  name: string;
  age?: number; // Optional property
  assignedCourse: string;
  married?: string | boolean; // Optional property with union type
  students: (string | number)[]; // Array of strings or numbers
};

const teacher: Teacher = {
  name: "mosa",
  assignedCourse: "Advance Web Development",
  students: ["23", 3]
};

// Using `interface` for defining a user structure
interface User {
  username: string;
  userId: number;
  role: string;
}

const user: User = {
  username: "mosa",
  userId: 2312,
  role: "admin"
};

// Function to display user details
const showUserDetails = (user: User) => {
  return `Hello ${user.username}!`; // Uses the `username` property from the User interface
}

console.log(showUserDetails(user)); // Output: Hello mosa!
