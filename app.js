// console.log("hey")
//
//
// const dog = () => { //unexpected token {
//   console.log('ruff');
// }
// dog()
//
//
// {
// cat = 'Zombie';
// }
// console.log(cat); //Zombie
//
//
//
// //if you omit let or const when declaring a variable
//
// //const needs to be inside the scope not on the global or outside scope
//
// //Scope in functions
// //our variables will be scoped to blocks, this includes the curlies {} provided, while loops, for loops, conditionals, and functions.
//
// //
// //
// // const item = 'spicy meatball'; //global variable
// //
// // const setItem = () => {
// //   return item; //stops the function.
// // }
// // console.log(setItem()); //logs spicy meatball
// //
// //
// //
// // //loops
// //
// // for (let i = 0; i < 100; i++) {
// //   console.log('Inside the block: ', i)
// // } //loops "Inside the block: 1" to 99.
// //
// // console.log('Outside the block', i) //i is not defined.
//
// //
// // for (var i = 0; i < 5; i++) {
// //   console.log(i);
// // } //outputs 0,1,2,3,4
// //   console.log(i); //0 1 2 3 4
//
//
// // for (var i = 0; i < 5; i++) {
// //   console.log(i);
// // } //outputs 0,1,2,3,4
// // console.log("chris", i);
//
//
//
//
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// } //outputs 0,1,2,3,4
// //console.log('hi', i) //uncaught ReferenceError: i is not defined
//
// const age = 21;
// let message ='';
//
// if(age < 21){
//   message = 'You cannot buy the beer';
// } else {
//   message = 'You can buy the beer';
// }
// console.log(message); //outputs You can buy the beer b.c the scope is global and the console.log() can reach it.
//
//
//
// //Global scope
// //When variables are declared outside of any enclosing blocks the value of it is then accessible to every other block of code. That includes functions and all blocks within those functions.
//
//
// //Local scope
// // // When variables are declared inside a function or a block, so they are scoped locally to that particular block. Local scope is the part of your code that is inside blocks and functions.
// //
// //
//
// // -------------------CHALLENGE----------------------
//
//
// // const checkSquare = (i) => {
// //   if (i > 0 && Math.sqrt(i) % 1 === 0) {
// //    return true;
// //   } else {
// //     return false;
// //   }
// // };
// // console.log(checkSquare(9));
//
// //
// const checkSquareAgain = (num) => {
//   return num > 0 && Math.sqrt(num) % 1 === 0;
// }
// console.log(checkSquareAgain(9));
// console.log(checkSquareAgain(10));
//
// // //-------------WHY?------------------
// //
// // //Write a function called checkToLimit that will loop up to an arbitrary limit brought in by a parm, and conosl.log() and whether each number is a perfect square.

// const checkToLimit = (lim) => {
//   for (let i = 0; i <= lim; i++) {
//     console.log(checkSquareAgain(i), i); //logs the true/false, number
//   }
// }
// checkToLimit(10);
//
//



// ---------------------------LAB--------------------------------


//#1

// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
//
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!


const printGreeting = (name) => {
  console.log("Hello there, " + name)
}
printGreeting("Chris")


//#2 reverseWordOrder. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// const reversed = backwards.reverse();


//start with a string.
//make an array from that string
//take that const array and use that .

const reverseIt = (parameter) => {
  console.log(parameter.split('').reverse());
}
reverseIt("partyPotensh") //.split('') into an array for each letter



//#3 Calculate function
// This function should take three arguments, two numbers and a string.
//
// Name the parameters num1, num2, and operation.
//
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
//
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
//
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).


//timothys code:
const calculate = (num1,num2,operation) => {
switch(operation) {
  case 'add': return num1 + num2;
  break;
  case 'sub': return num1 - num2;
  break;
  case 'mult': return num1 * num2;
  break;
  case 'div': return num1/num2;
  break;
  case 'exp': return num1 ** num2; //** is
  break;
  //could default: ; in case none of these work. it's like an else statement
}

}

//didn't finish this...
// if (operation === 'add') {
//   return num1 + num2;
// } if else (operation === 'div') {
//
// }





//#5 Writing a function to determine if a word is a Palindrome.
const palindrome = (backwards) => {
  const backwardsPalindrome = palindrome.split('').reverse().join('');
  if (backwardsPalindrome === backwards) {
    return true;
  } else if {
    return false;
  }
  //console.log(backwards.split('').reverse().join(''));
};
palindrome("Anna");
palindrome("desk");
