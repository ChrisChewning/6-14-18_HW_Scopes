console.log('howdy');


//#1 Verbal questions

// my commented answer
// 1. What is the difference between a parameter and an argument?
//   -parameter is at the top line, where your function is declared. It is empty.
//   -argument is what is passed through.
//
// 2. Within a function, what is the difference between return and console.log?
//   -return: stops the function.
//   -console.log: used for testing, doesn't stop the function.


  //#2
// 1. Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.


// const checkPalindrome = (word) => {
// if (word === word.split('').reverse().join('').toLowerCase()) {
//   return (true);
// } else {
//   return (false);
// }
// };
// console.log(checkPalindrome("anna"));
// console.log(checkPalindrome("Anna"));
//


// //#3
// Write a function sumDigits that accepts a number and returns the sum of its digits.
//
// console.log(sumDigits(42));
// => 6;


// function sumDigits(addItUp) {
//   const splitted = addItUp.split('');
//   console.log(splitted);
// }
// sumDigits(42);
// //

// const sumDigits = (addItUp) => {
//   var summed = addItUp.toString().split('').reduce();
// return summed;
// }
//
// console.log(sumDigits(42));

//example from Stack Exchange:
// var num = 123456;
// var digits = num.toString().split('');
// console.log(digits);




//#4 Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
//
// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript
//
// console.log(calculateSide(8, 6));
// // => 10
//
// const calculateSide = (sideA, sideB) => {
//  var sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
// return sideC;
// }
// console.log(calculateSide(8, 6)); //returns 10.
//
// //EXPLANATION:
//
// //Math.sqrt returns the square root of the number. Has 1 parameter.
// //Math.pow returns the base to the power of the exponent. Has 2 parameters.
//
// // console.log(Math.sqrt(9)); //outputs 3.
// // console.log(Math.pow(3,3)); //outputs 27 b.c 3 * 3 * 3
//
//
// //#5
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as
//
// let sum = 0;
// that will accumulate value within the loop. Expected result:
//
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21


const sumArray = (summedItUp) => {
  let sum = 0;
  for (let i=0; i < summedItUp.length; i++) {
    sum += summedItUp[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));


//HOW TO USE .reduce()?


// var total = nums.reduce(function(a,b) {
//     return (+a)+(+b);
// });
//
// //explanation: .reduce() is an array method.
