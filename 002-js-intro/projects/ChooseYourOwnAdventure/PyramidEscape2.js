let game = true;



const { prompt } = require('enquirer');


const questions = [
{
    type: 'input',
    name: 'username',
    message: 'What is your username?'
}
];

prompt(questions)
    .then(answer => console.log(`Hello ${answer.username} welcome to Pyramid Escape!`))
    .catch(console.error);
