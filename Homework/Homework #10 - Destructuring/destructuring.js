/*
(Object Destructuring)
JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable.
The destructuring is also possible for JavaScript Arrays. By default, the object key name becomes the variable that holds the respective value. 
So no extra code is required to create another variable for value assignment.
*/
/*
(Array Destructuring)
Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
That is, we can extract data from arrays and objects and assign them to variables.
*/

//Object Example
const user = { 
    'name': 'James',
    'address': '18th Dover Cliff Ln.',
    'age': 28
}

const { name } = user;
console.log("Object Example");
console.log(name); 

//Array Example
let introduction = ["Hello", "I" , "am", "James"];
let greeting = introduction[0];
let name1 = introduction[3];

console.log("Array Example");
console.log(greeting);
console.log(name1);
