
var myName= "Abraham"
var myLast = "Kiplagat"
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
var num1 = 100;
var num2 = 1500;
var num3 = 2;
if(num1 > num2 && num3){
console.log("The biggest Number is " + num1)
}
else if(num2 > num1 && num3){
  console.log("The biggest Number is " + num2)
}
else if (num3 > num1 && num2){
  console.log("The biggest Number is " + num2)
}
else{
  console.log("none")
}