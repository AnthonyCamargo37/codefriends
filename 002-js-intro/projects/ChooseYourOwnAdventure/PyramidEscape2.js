let quit = false;
let intelligence = 0;
let agility = 0;
let strength = 0;

let stats = console.log(`strength: ${strength}
intelligence: ${intelligence}
agility: ${agility}`);

const { prompt } = require('enquirer');


function options(option) {
    console.log(typeof option.username);
    if(option === 's') {
        console.log(stats);
    } else if(option === 'q'){
        quit = true;
    } else {
        console.log(`Hello ${option} welcome to Pyramid Escape!`);
    }
}

const question1 = [
{
    type: 'input',
    name: 'username',
    message: 'What is your username?'
}
];

prompt(question1)
    .then(answer => options(answer.username))
    .catch(console.error);

//prompt(question1)
//    .then(answer => console.log(`Hello ${answer.username} welcome to Pyramid Escape!`))
//    .catch(console.error);
