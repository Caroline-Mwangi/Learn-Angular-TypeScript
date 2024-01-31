function add (a: number, b: number, c?:number) : number{
    return a + b;
}

// The parameter c is an optional parameter - it could be null or could have a value
let mySum = add(3,4);
console.log(mySum);

// Another way to write typescript functions

let sub = (x:number, y:number) : number => x - y;

console.log(sub(5,2))

// Rest Parameters: type must be an array 

function add2 (a: number, b: number, ...c:number[]) : number{
    return a + b + c.reduce((x,y) => x + y, 0);
}

console.log(add2(2,3, ...[1,2,3,4,5]));
console.log(add2(5,7,4,5,6,7))

// Generic Functions
// <Type> does not represent/mean anything, it is just a placeholder
function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let result3 = getItems<number>([1,2,3,4,5]); // Replace <Type> with whatever datatype you are working with

let result4 = getItems<string>(['1','2','3','4','5']);