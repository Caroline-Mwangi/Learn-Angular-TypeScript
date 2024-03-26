/* Utilities: Syntax features that make programming enjoyable.
    Two important ones:
        - Fast Arrow Function Syntax
        - Template Strings
*/

/* Fast Arrow Functions (=>): Shorthand notation for writing functions. 
    - Parenthesis are optional when there's only one parameter
    - Arrows are a great way to cleanup inline functions 
*/

var data: string[] = ["Dave", "Mary", "Jane"];
data.forEach((line) => console.log(line));
// Normal way: data.forEach(function(line){console.log(line)})

/* Template Strings
    * Two great features of template strings:
        - String Interpolation: Variables within strings (without being forced to concatenate with '+'). 
        - Multi-line strings.
*/

//  String interpolation

var firstname = "John";
var lastname = "Doe";

var greeting = `Hello, ${firstname} ${lastname}`;
console.log(greeting);

// Multiline Strings

var template = `
    This is line 1.
    This is line 2.
    This is line 3.
`;

console.log(template);
