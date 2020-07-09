//Intro
console.log("Welcome to Pyramid Escape. Today you will need to figure out a way to\
escape the pyramid by answering a series of questions. Good luck!\n");

//Set constants
//const prompt = require('prompt-sync')();
const Enquirer = require('enquirer');
const { prompt } = require('enquirer');

//Set stats
let intelligence = 0;
let strength = 0;
let agility = 0;

function myStats() {
    console.log("\nYour Stats are:")
    console.log(`Intelligence: ${intelligence}`);
    console.log(`Strength: ${strength}`);
    console.log(`Agility: ${agility}\n`);
}

const name = prompt("What is your name? ");
console.log(`\nHello ${name}, to escape the pyramid you need to be strong, intelligent\
and agile. Based on how you answer the following questions you will \
get points in each category. Once you reach an overall score of 10 points \
you will escape the maze.`);
 
myStats();

const question1 = prompt("One of George Orwell's famous book has a\
year for a title. What year was it? ");

if (question1 === '1984') {
    console.log("Good job! You answered it correctly.\n");
    intelligence += 3;
} else {
    console.log("Sorry, wrong answer. The correct answers was 1984.\n");
    intelligence--;
}

myStats();

const question2 = prompt("Now that you know what year it is..\
This means no cell phone to look up the answers...Who created javascript? ");

if (question2.toLowerCase() === 'brendan eich') {
    console.log("Good job! You answered it correctly.\n");
    intelligence += 2;
    strength += 2;
    agility += 1;
} else {
    console.log("Sorry, wrong answer. The correct answer was Brendan Eich.\n");
    intelligence--;
    strength--;
    agility--;
}

myStats();