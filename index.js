'!#/usr/bin/';
import inquirer from "inquirer";
let guess = Math.floor(Math.random() * 10 + 1);
let guessNumber = await inquirer.prompt({
    name: "yourguess",
    message: "enter your number between 1-10:",
    type: "number",
});
if (guessNumber.yourguess === guess) {
    console.log("Congratulations !!! your guess is right....");
}
else {
    console.log("Oops !!! your guess is wrong....");
}
