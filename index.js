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
  console.log("Nan- Not a number! Please input Number");
} else if (inputNumber % 5 === 0 && inputNumber % 3 === 0) {
  console.log("fizzBuzz");
} else if (inputNumber % 5 === 0) {
  console.log("buzz");
} else if (inputNumber % 3 === 0) {
  console.log("fizz");
} else if (inputNumber % 5 !== 0 && inputNumber % 3 !== 0) {
  console.log(` ${inputNumber} is not a good number`);
} else {
  console.log("nothing worked");
}

// Exercise 2

// Write a JavaScript conditional statement to find the largest of five numbers.

// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

let inputNumberOne = 252;
let inputNumberTwo = 390485;
let inputNumberThree = 3245345;
let inputNumberFour = 12234242234;
let inputNumberFive = 234234234234234;

if (
  typeof inputNumberOne !== "number" ||
  typeof inputNumberTwo !== "number" ||
  typeof inputNumberThree !== "number" ||
  typeof inputNumberFour !== "number" ||
  typeof inputNumberFive !== "number"
) {
  console.log("Invalid Input");
} else if (
  inputNumberOne > inputNumberTwo &&
  inputNumberOne > inputNumberThree &&
  inputNumberOne > inputNumberFour &&
  inputNumberOne > inputNumberFive
) {
  console.log("inPutNumberOne is the largest of five numbers");
} else if (
  inputNumberTwo > inputNumberOne &&
  inputNumberTwo > inputNumberThree &&
  inputNumberTwo > inputNumberFour &&
  inputNumberTwo > inputNumberFive
) {
  console.log("inPutNumberTwo is the largest of five numbers");
} else if (
  inputNumberThree > inputNumberOne &&
  inputNumberThree > inputNumberTwo &&
  inputNumberThree > inputNumberFour &&
  inputNumberThree > inputNumberFive
) {
  console.log("inPutNumberThree is the largest of five numbers");
} else if (
  inputNumberFour > inputNumberTwo &&
  inputNumberFour > inputNumberThree &&
  inputNumberFour > inputNumberOne &&
  inputNumberFour > inputNumberFive
) {
  console.log("inPutNumberFour is the largest of five numbers");
} else if (
  inputNumberFive > inputNumberTwo &&
  inputNumberFive > inputNumberThree &&
  inputNumberFive > inputNumberFour &&
  inputNumberFive > inputNumberOne
) {
  console.log("inPutNumberFive is the largest of five numbers");
}

// Exercise 3

// Write a JavaScript program that accept two integers and display the larger.

// Sample numbers : 2,5
// Output : 5
let inputLargestOne = 234;
let inputLargetTwo = 234324;
if (typeof inputLargestOne !== "number" || typeof inputLargetTwo !== "number") {
  console.log("Invalid Input");
} else if (inputLargestOne > inputLargetTwo) {
  console.log(`${inputLargestOne} is the larger integer`);
} else if (inputLargetTwo > inputLargestOne) {
  console.log(`${inputLargetTwo} is the larger integer`);
}
// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

let inputSignProductOne = 5;
let inputSignProductTwo = -25;
if (
  typeof inputSignProductOne !== "number" ||
  typeof inputSignProductTwo !== "number"
) {
  console.log("Invalid Input");
} else if (inputSignProductOne > 0 && inputSignProductTwo > 0) {
  console.log("+");
} else if (inputSignProductOne < 0 && inputSignProductTwo > 0) {
  console.log("-");
} else if (inputSignProductOne > 0 && inputSignProductTwo < 0) {
  console.log("-");
} else if (inputSignProductOne < 0 && inputSignProductTwo < 0) {
  console.log("+");
}

// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator tozs console.log true, when x is equal to y.
// Choose the correct comparison operator to console.log true, when x is NOT equal to y.

let inputX = 5;
let inputY = 10;
if (typeof inputX !== "number" || typeof inputY !== "number") {
  console.log("Invalid Input");
} else if (inputX > inputY === true) {
  console.log("X>Y");
} else if ((inputX == inputY) === true) {
  console.log("X=Y");
} else if (inputX < inputY) {
  console.log("X<Y");
}

// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
let inputVariable = 89;
if (typeof inputVariable !== "number") {
  console.log("Invalid Input");
} else if (inputVariable > 89) {
  console.log("A");
} else if (inputVariable === 100) {
  console.log("A");
} else if (inputVariable > 79) {
  console.log("B");
} else if (inputVariable === 80) {
  console.log("B");
} else if (inputVariable > 69) {
  console.log("C");
} else if (inputVariable === 70) {
  console.log("C");
} else if (inputVariable > 59) {
  console.log("D");
} else if (inputVariable === 60) {
  console.log("D");
} else if (inputVariable < 60) {
  console.log("F");
} else if (inputVariable > 100) {
  console.log("Invalid Input");
}

// Exercise 7

// let engineIndicatorLight = "red blinking";
// let spaceSuitsOn = true;
// let shuttleCabinReady = true;
// let crewStatus = spaceSuitsOn && shuttleCabinReady;
// let computerStatusCode = 200;
// let shuttleSpeed = 15000;

//  3) Write conditional expressions to satisfy the following safety rules:

//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 400;
let shuttleSpeed = 15000;
if (crewStatus === true) {
  console.log("Crew Ready");
} else if (crewStatus === false) {
  console.log("Crew not Ready");
}
if (typeof computerStatusCode !== "number") {
  console.log("Enter Valid Input");
} else if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Sucess! Computer online.");
} else if (computerStatusCode < 200 || computerStatusCode > 200) {
  console.log("ALERT: Computer offline!");
}
if (typeof shuttleSpeed !== "number") {
  console.log("Enter Valid Input");
} else if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else if (shuttleSpeed > 8000) {
  console.log("Stable speed");
}
// Exercise 8

// Write if statement that takes role and return each role with greeting

//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'
let inputMember = "elbeg";
if (typeof inputMember !== "string") {
  console.log("invalid input");
} else if (inputMember === "Employee") {
  console.log("Hello");
} else if (inputMember === "Director") {
  console.log("Greetings");
} else if (inputMember === "") {
  console.log("Please provide role");
} else {
  console.log("Hi");
}

// Exercise 9

// Write If statement that takes number checks if the number is odd or even

//     if odd return "the number is odd"
//     if even return "the number is even"

let inputDice = 6;
if (typeof inputDice !== "number") {
  console.log("Please enter a valid input");
} else if (inputDice % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}

// Exercise 10

// Write If statement that takes string
//     if string length is more than 10 return the string has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character
let inputText = "9";

if (typeof inputText !== "string") {
  console.log("Enter a valid input text");
} else if (inputText.length > 10) {
  console.log(`${inputText} has more than 10 characters`);
} else if (inputText.length > 5) {
  console.log(`${inputText} has more than 5 characters`);
} else if (inputText.length < 1) {
  console.log(`${inputText} has nothing`);
} else if (inputText.length === 1) {
  console.log(`${inputText} has 1 character`);
}

// Write a JavaScript program which iterates the integers from 0 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc // use loop // 
for (inputLoop = 1; inputLoop <= 100; inputLoop++) {
  if (inputLoop % 3 === 0 && inputLoop % 5 === 0) {
    console.log("FizzBuzz")
  } else if (inputLoop % 3 === 0) {
    console.log("Fizz");
  } else if (inputLoop % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(inputLoop);
  }
}