/*
Variables, variants of variables, and Constants are different assets used in code that make up certain parts in JavaScript.  
A variable is a placeholder in code that holds a certain value. Variables are useful for making certain parts of code easier to understand, or more organized and useful. 
Constants in JavaScript are certain types of variables, but they are only meant to be used in certain places. 
Constants cannot be reassigned, but they can be edited, like you cannot completely overhaul a constants value, but you can make small tweaks or edits to it. 
A “let” variant of a variable can be reassigned a different value. A variable contains a value which can be used anywhere throughout the code or in different actions or functions. 
A “let” variant of a variable is used to tell what code to do a function, statement, or loop, basically telling the code what to do.
*/

// Var, Let, and Const Examples

// Var Example
console.log ("Var Example")
var priceone = 34;
var pricetwo = 56;
var pricethree = 48;
var total = priceone + pricetwo + pricethree;
var print = "Thanks for Shopping! Your Total is:";
console.log (print, total)

//Let Variables Example
console.log ("Let Example")
let items = 7;
if (items === 7) {
  let items = 7;
  var print = "Items Purchased:"
  console.log(print, items);
  // expected output: "Items Bought"
}


//Const Example
console.log ("Const + Object Example")
const car = {Brand:"BMW", Model:"X5 M", Color:"Mystic Blue", Price:"$92,850"}
console.log (car)


