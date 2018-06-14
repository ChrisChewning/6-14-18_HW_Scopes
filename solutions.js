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


const checkPalindrome = (word) => {
if (word === word.split('').reverse().join('')) {
  console.log(true);
} else {
  console.log(false);
}
};
checkPalindrome("anna");
checkPalindrome("Anna");



//3
