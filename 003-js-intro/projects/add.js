let equation = '';
let numbersToAdd = [];
equation = process.argv[2];
numbersToAdd = equation.split("+");
let sum = 0;

for(let i = 0;i < numbersToAdd.length;i++) {
    console.log(numbersToAdd[i]);
    sum += Number(numbersToAdd[i]);
    
}

console.log(sum);

