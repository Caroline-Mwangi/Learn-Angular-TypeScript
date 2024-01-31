// Interfaces are used mostly to create your own user-defined data types

interface User {
  name: string;
  age?: number; // The question mark makes this property optional
  id: number;
  email: string;
}

let user: User = { name: "Jane", id: 8, email: "" };

interface Employee extends User {
  salary: number;
}

let emp: Employee = { name: "Doe", id: 7, email: " ", salary: 5000 };

// Object Destructuring
let { name: userName, email }: User = { name: "Jack", id: 4, email: " " };

// Array Destructuring
let [user1, user2, ...others]: User[] = [
  { name: "Jane", id: 8, email: "" },
  { name: "Jane2", id: 9, email: " " },
  { name: "Jane3", id: 10, email: "" },
];

console.log(`${emp.salary} and ${user.name} and ${userName}`);
