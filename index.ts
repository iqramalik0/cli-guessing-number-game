#! /usr/bin/env node
import inquirer from "inquirer";

console.log ("Wellcome to code with iqra - CLI Number Guessing Game");

const randomNumber =Math.floor(Math.random() * 5 + 1 );

const answer = await inquirer.prompt([
{
    name: "userGuessingNumber",
    type:  "number",
    message: "Enter your guess number(Number limit from 1 to 5 ):",
        
},
]);

if (answer.userGuessingNumber === randomNumber){
console.log ("congragulation ! you guess a correct number.");
}
else{
    console.log("sorry, you guess a wrong number");
}


