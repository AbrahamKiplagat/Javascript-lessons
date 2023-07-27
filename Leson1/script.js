
var myName= "Tammy"
var myLast = "Abraham"
let age = 895
alert("My names are:" + " " + myName + " " + myLast)
if(age >= 18 && age< 90){
  console.log("You are allowed to vote")
}
else if(age >=1 && age<=17){
  console.log("You are not allowed to vote please go home")
}
else{
  console.log("Please Enter a valid age")
}
/**
 * 80-100=Distinction
 * 60-79=Credit
 * 50-59=pass
 * 40-49=Satisfactory
 * Bellow 39=Fail
 */
let result = 80
if (result >=80 && result <=100){
  console.log("Distinction")
}
else if (result >=60 && result <80){
  console.log("Credit")
}
else if (result >=50 && result <60){
  console.log("Pass")
}
else if (result >=40 && result <49){
  console.log("Satisfactiry")
}
else if (result >=0 && result <40){
  console.log("Fail")
}
else {
  console.log("Incorect student results")
}
/**
 * declare 3 variables
 * num1,num2,num3
 * 100,1500,2
 * the biggest number is _
 */
var num1 = 20000;
var num2 = 20000;
var num3 = 20000;

if (num1 > num2 && num1 > num3) {
  console.log("The biggest Number is " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The biggest Number is " + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("The biggest Number is " + num3);
} else {
  console.log(null);
}

/**
 * Switch case statement
 */
let yourAge = 17;

switch (yourAge) {
  case 17:
  console.log ("You are 17 Years")
break;
case 18:
  console.log ("You are 18 Years")
  break;
  case 19:
    console.log ("You are 19 Years")
  default:
    console.log (" ")
}
//Used true on switch statement to look more defines
switch(true){
  case num1 > num2 && num1 > num3:
    console.log("The biggest Number is " + num1);
    break;
    case num2 > num1 && num2 > num3:
    console.log("The biggest Number is " + num2);
    break;
    case num3 > num1 && num3 > num2:
    console.log("The biggest Number is " + num3);
    break;
default:
  console.log("A number is equal to another or it's not defined");

}
/**
 * Using the prompt
 */

let firstName = prompt ("Please enter your first Name")
let lastName = prompt ("Please enter your last name")
let fullName = firstName +lastName
alert("Your full name is: " + fullName)
/**
 * Using the prompt
 * first number
 * second number 
 * third number
 * bigger number
 */
// let big;
let firstNumber = parseInt( prompt ("Please enter your first Number"))
let secondNumber = parseInt(prompt ("Please enter your second number"))
let thirdNumber = parseInt(prompt ("Please enter your third number"))
/**
 * If is wirking, Just comented!
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  alert("The biggest Number is the first Number " + firstNumber);
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  alert("The biggest Number is the secondNumber " + secondNumber);
}
else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  alert("The biggest Number is the third number " + thirdNumber);
}
 */
switch (true){
  case (firstNumber > secondNumber && firstNumber > thirdNumber):
    alert("The biggest Number is the first Number " + firstNumber);
    break;

    case (secondNumber > firstNumber && secondNumber > thirdNumber):
      alert("The biggest Number is the secondNumber " + secondNumber);
    break;

    case (thirdNumber > firstNumber && thirdNumber > secondNumber):
      alert("The biggest Number is the third number " + thirdNumber);
    break;
    default:
      alert("The biggest Number is the third number " + thirdNumber);
}


