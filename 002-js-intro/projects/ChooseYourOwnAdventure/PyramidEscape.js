const prompt = require('prompt-sync')();
let gameOn = true;
let answer = "";
questionNumber = 1

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

function mainOptions(question) {
    if(question === 's') {
        myStats();
    } else if (question === 'q') {
        console.log("Game Over");
        gameOn = false;
    }
}


const name = prompt("What is your name? ");
console.log(`\nHello ${name}, to escape the pyramid you need to be strong, intelligent\
and agile. Based on how you answer the following questions you will \
get points in each category. Once you reach an overall score of 10 points \
you will escape the maze.\nYou can press "s" to see your stats and "q" to quit\n`);
 
while (gameOn) {

switch(questionNumber) {
    case 1:
        answer = prompt("One of George Orwell's famous book has ayear for a title. What year was it?");
                                   
        if (answer === '1984') {
            console.log("Good job! You answered it correctly. Your Intelligence point increased by 3\n");
            intelligence += 3;
            questionNumber += 1;
 
        } else if(answer === 's' || answer === 'q') {
            mainOptions(answer);

        } else {
            console.log("Sorry, wrong answer. The correct answers was 1984.\n");
            intelligence--;
            questionNumber += 1;
        }
    case 2:
       answer = prompt("Now that you know what year it is..\nThis means no cell phone to look up the answers...Who created javascript? ");
        
        if (answer.toLowerCase() === 'brendan eich') {
            console.log("Good job! You answered it correctly.\n");
            intelligence += 2;
            strength += 2;
            agility += 1;
            questionNumber += 1;

        } else if(answer === 's' || answer === 'q') {
            mainOptions(answer);

        } else {
            console.log("Sorry, wrong answer. The correct answer was Brendan Eich.\n");
            intelligence--;
            strength--;
            agility--;
            questionNumber += 1;
        }
    case 3:
       answer = prompt("What year was Brendan Eich born?");
        if (answer === '1961') {
            console.log("Good job! You answered it correctly.\n");
            intelligence += 2;
            strength += 5;
            agility += 1;
            questionNumber += 1;

        } else if(answer === 's' || answer === 'q') {
            mainOptions(answer);

        } else {
            console.log("Sorry, wrong answer. The correct answer was Brendan Eich.\n");
            intelligence--;
            strength--;
            agility--;
            questionNumber += 1;
        }
    case 4:
        console.log("You made it to the end of the game...Lets see your stats");
        myStats();
        console.log("Your combined total is " + (intelligence + strength + agility));
        if (intelligence + strength + agility > 10) {
            console.log("You have escaped the pyramid!");
            gameOn = false;
        } else {
            console.log("Sorry you didn't make it out!");
            gameOn = false;
        }
    }
}