// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

let inputNumber = 13;
if (typeof inputNumber !== "number") {
  console.log("Nan - Not a Number! Please Input Number");
} else if (inputNumber % 3 === 0 && inputNumber % 5 == 0) {
  /* === means that they both have equal value and equal type == means it is equal to the other number  */
  console.log("FizzBuzz");
} else if (inputNumber % 3 !== 0 && inputNumber % 5 !== 0) {
  /* !== is not equal to */
  console.log("given Input Number/Value");
} else if (inputNumber % 3 === 0) {
  /*  same value and equal*/
  console.log("Fizz");
} else if (inputNumber % 5 === 0) {
  /*  same value and equal*/
  console.log("Buzz");
}
// Exercise 2

// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs

// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

let inputNumberOne = 1; /* all of these are inputs for numbers*/
let inputNumberTwo = 2;
let inputNumberThree = 3;
let inputNumberFour = 4;
let inputNumberFive = 5;
if (
  typeof inputNumberOne !== "number" /* inputs for numbers*/ ||
  typeof inputNumberTwo !== "number" ||
  typeof inputNumberThree !== "number" ||
  typeof inputNumberFour !== "number" ||
  typeof inputNumberFive !== "number"
) {
  console.log("INVALID INPUT");
} else if (
  inputNumberOne > inputNumberTwo /* bigger than*/ &&
  inputNumberOne > inputNumberThree /* all o f these are bigger than*/ &&
  inputNumberOne > inputNumberFour /* && means and*/ &&
  inputNumberOne > inputNumberFive
) {
  console.log("input number one is the biggest");
} else if (
  inputNumberTwo > inputNumberOne &&
  inputNumberTwo > inputNumberThree &&
  inputNumberTwo > inputNumberFour &&
  inputNumberTwo > inputNumberFive
) {
  console.log("input number two is the biggest");
} else if (
  inputNumberThree >
    inputNumberOne /* all of these are just the same thing just different input numbers that are grater than the other numbers*/ &&
  inputNumberThree > inputNumberTwo &&
  inputNumberThree > inputNumberFour &&
  inputNumberThree > inputNumberFive
) {
  console.log("input number three is the biggest");
} else if (
  inputNumberFour > inputNumberOne &&
  inputNumberFour > inputNumberTwo &&
  inputNumberFour > inputNumberThree &&
  inputNumberFour > inputNumberFive
) {
  console.log("input number four is the biggest");
} else if (
  inputNumberFive > inputNumberOne &&
  inputNumberFive > inputNumberTwo &&
  inputNumberFive > inputNumberThree &&
  inputNumberFive > inputNumberFour
) {
  console.log("input number five is the biggest");
}

// Exercise 3

// Write a JavaScript program that accept two integers and display the larger.

// check input numbers are the type of number, if not console.log('Invalid inputs)

// Sample numbers : 2,5
// Output : 5
let inputLargestOne = 11;
let inputLargestTwo = 9;
if (
  typeof inputLargestOne !== "number" ||
  typeof inputLargestTwo !== "number"
) {
  console.log("invalid input");
} else if (inputLargestOne > inputLargestTwo) {
  /* what all of this is saying is like if inputSomething is bigger than inputBlank the console log basicly says that One input is greater than the other one */
  console.log("input largest number is one");
} else if (inputLargestTwo > inputLargestOne) {
  console.log("input largest number is two");
}

// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

let inputSignOne = 1;
let inputSignTwo = -2;
if (typeof inputSignOne !== "number" || typeof inputSignTwo !== "number") {
  console.log("invalid input");
} else if (inputSignOne > 0 && inputSignTwo > 0) {
  console.log("positive");
} else if (inputSignOne < 0 && inputSignTwo > 0) {
  console.log("negative");
} else if (inputSignOne < 0 && inputSignTwo < 0) {
  console.log("positive");
} else if (inputSignOne > 0 && inputSignTwo < 0) {
  console.log("negative");
}

// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log true, when x is equal to y.
// Choose the correct comparison operator to console.log true, when x is NOT equal to y.

let inputY;
let inputX;
if (typeof inputX !== "number" || typeof inputY !== "number") {
  console.log("invalid input");
} else if (inputX > inputY) {
  console.log(" x is greater than y");
} else if (inputX < inputY) {
  console.log("x is NOT greater than y");
} else if ((inputX = inputY)) {
  console.log(" x is equal to y");
}

// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.

let grade = 59;
for (let grade = 60; grade <= 100;grade++){
  if (60 <= grade && grade <= 69){
    console.log("Your grade is D")
  }
  else if (70 <= grade && grade <= 79){
    console.log("your grade is C")
  }
  else if (80 <= grade && grade <= 89){
    console.log("your grade is B")
  }
  else if (90 <= grade && grade <= 100){
    console.log("your grade is A")
  }
}
if (grade <= 59) {
  console.log("Your grade is F ");
} else if (60 <= grade && grade <= 69) {
  console.log("your grade is D");
} else if (70 <= grade && grade <= 79) {
  console.log("your grade is C");
} else if (80 <= grade && grade <= 89) {
  console.log("your grade is B");
} else if (90 <= grade && grade <= 100) {
  console.log("your grade is A");
}
let inputRole = "Employee"
if (typeof inputRole !=="string"){
  console.log("invalid input")
}
else if (inputRole = "director"){
  console.log("Greetings")
}
else if (inputRole === "Employee"){
  console.log("hello")
}
let input = 5
if (typeof input !=="number"){
  console.log("invalid input")
}
else if (input % 2 ==0 ) {
  console.log("this number is even")
}
else {
  console.log("this number is odd")
}
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = false;
let shuttleCabinReady = false;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 400;
let shuttleSpeed = 15000;


if (crewStatus === true){
  console.log("Crew Ready")
}
else if (crewStatus === false) {
  console.log("Crew Not Ready")
}
if (computerStatusCode === 200){
  console.log("Please stand by. Computer is rebooting.")
}
else if (computerStatusCode === 400){
  console.log("Success Computer online.")
}
if (shuttleSpeed > 17500){
  console.log("ALERT Escape velocity reached")
}
else if (shuttleSpeed < 8000){
  console.log("ALERT: Cannot maintain orbit")
}
else {
  console.log("stable speed")
}
let inputString = "w"
if (inputString.length > 10){
  console.log("this string has more than 10 characters")
}
else if (inputString.length > 5){
  console.log("this string has more than 5 charcters")
}
else if (inputString.length < 1){
  console.log("the string has no characters")
}
else if (inputString.length === 1){
  console.log("this string has 1 character")
}



/*
Exercise 10 j
Write If statement that takes string 
    if string length is more than 10 print the string  has more than 10 characters
     if string length is more than 5 return the string has more than 5 characters
      if string length is less than 1 return the string has nothing
      if string length is equal to 1 return the string has 1 character
Exercise 7 j

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

 3) Write conditional expressions to satisfy the following safety rules:

 a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".


 b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"


 c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".




Write If statement that takes string 
    if string length is more than 10 return the string  has more than 10 characters
     if string length is more than 5 return the string has more than 5 characters
      if string length is less than 1 return the string has nothing
      if string length is equal to 1 return the string has 1 character
Exercise 9 j

Write If statement that takes number checks if the number is odd or even

    if odd return "the number is odd"
    if even return "the number is even"
Exercise 8 j

Write if statement that takes role and return each role with greeting

    if role is 'Employee' return 'Hello'
    if role is 'Director' return 'Greetings'
    if role is '' return 'Please provide role'
    else return 'Hi'
Exercise 7 
j
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

 3) Write conditional expressions to satisfy the following safety rules:

 a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".


 b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"


 c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".





we need 2 numbers
and we are gonna check which one has the bigger number and we have to give value to the numbers












Exercise 10 



*/
