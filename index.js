let inputNumber = 13;
if (typeof inputNumber !== "number") {
  console.log("Nan - Not a Number! Please Input Number");
} else if (inputNumber % 3 === 0 && inputNumber % 5 == 0) {
  console.log("FizzBuzz");
} else if (inputNumber % 3 !== 0 && inputNumber % 5 !== 0) {
  console.log("given Input Number/Value");
} else if (inputNumber % 3 === 0) {
  console.log("Fizz");
} else if (inputNumber % 5 === 0) {
  console.log("Buzz");
}

let inputNumberOne = 1;
let inputNumberTwo = 2;
let inputNumberThree = 3;
let inputNumberFour = 4;
let inputNumberFive = 5;
if (
  typeof inputNumberOne !== "number" ||
  typeof inputNumberTwo !== "number" ||
  typeof inputNumberThree !== "number" ||
  typeof inputNumberFour !== "number" ||
  typeof inputNumberFive !== "number"
) {
  console.log("INVALID INPUT");
} else if (
  inputNumberOne > inputNumberTwo &&
  inputNumberOne > inputNumberThree &&
  inputNumberOne > inputNumberFour &&
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
  inputNumberThree > inputNumberOne &&
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
let inputLargestOne = 11;
let inputLargestTwo = 9;
if (
  typeof inputLargestOne !== "number" ||
  typeof inputLargestTwo !== "number"
) {
  console.log("invalid input");
} else if (inputLargestOne > inputLargestTwo) {
  console.log("input largest number is one");
} else if (inputLargestTwo > inputLargestOne) {
  console.log("input largest number is two");
}

/*
Exercise 1 
<h3>Write a function which checks given input/parameter:</h3>
<ul>
  <li>If input/parameter is divisible by 3 print => Fizz</li>
  <li>If input/parameter is divisible by 5 print => Buzz</li>
  <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
  <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
  <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
</ul>

Exercise 2 

Write a JavaScript conditional statement to find the largest of five numbers. 
check input numbers are the type of number, if not console.log('Invalid inputs

Sample numbers : -5, -2, -6, 0, -1
Output : 0

Exercise 3 

Write a JavaScript program that accept two integers and display the larger.

check input numbers are the type of number, if not console.log('Invalid inputs)

Sample numbers : 2,5
Output : 5

Exercise 4 

Write a JavaScript conditional statement to find the sign of product of three numbers. Display an console.log box with the specified sign.

Sample numbers : 3, -7, 2
Output : The sign is -

Exercise 5 

Choose the correct comparison operator to console.log true, when x is greater than y.
Choose the correct comparison operator to console.log true, when x is equal to y.
Choose the correct comparison operator to console.log true, when x is NOT equal to y.

Exercise 6 

The Grade Assigner
- Write a if/else statement that:
  - takes 1 variable, a number score.
  - returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that if/else statement for a few different scores and log the result to make sure it works.

Exercise 7 

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

Exercise 8 

Write if statement that takes role and return each role with greeting

    if role is 'Employee' return 'Hello'
    if role is 'Director' return 'Greetings'
    if role is '' return 'Please provide role'
    else return 'Hi'

Exercise 9 

Write If statement that takes number checks if the number is odd or even

    if odd return "the number is odd"
    if even return "the number is even"

Exercise 10 

Write If statement that takes string 
    if string length is more than 10 return the string  has more than 10 characters
     if string length is more than 5 return the string has more than 5 characters
      if string length is less than 1 return the string has nothing
      if string length is equal to 1 return the string has 1 character

*/
