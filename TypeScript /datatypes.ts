// String

let lname: string;

lname = "Doe";

let newname = lname.toUpperCase();

console.log(newname);

// Number

let age: number;

age = 20;

let result = parseInt("87"); // Converts string to number

console.log(result);

//Boolean

let isValid: boolean = false; // The boolean valid must be defined

// Arrays

let myList: string[]; // An array that only contains strings

let myArray: Array<number>; // Another way to define an array

myArray = [1, 2, 3, 4, 5];

let result2 = myArray.filter((x) => x > 2); // Filtering numbers that are greater than 2

let sum = myArray.reduce((x, y) => x + y); // Finding the sum of the array of numbers

console.log(sum);

//Enums: constants based data structure that store a set of named constants grouped around a central theme.

const enum Color {
  Red,
  Green,
  Blue = "Blue",
}

let c: Color = Color.Blue;
console.log(`Enum: ${c}`);

// Tuples

let myTuple: [number, string, boolean];

myTuple = [3, "Hello", true];

// Any: Any value can be assigned to the variable with this data type. It is not advised to use it in production.

let note: any;

note = "5";
note = 5;

// Void: No type is expected
