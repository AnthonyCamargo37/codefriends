const prompt = require('prompt-sync')();

const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess = prompt("Guess a number between 1 and 100: ");

while (String(randomNumber) !== guess) {
    if ( guess < randomNumber) {
        guess = prompt("The number is higher! Try again: ");
    } else {
        guess = prompt("The number is lower! Try again: ");
    }
}

console.log("Congrats, good guess! you won!");