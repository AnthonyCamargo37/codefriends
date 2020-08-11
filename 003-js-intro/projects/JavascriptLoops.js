//Challenge #1
let sum = 0;

for(let i = 0;i < 1000;i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }
}

console.log(`Challenge #1 answer is: ${sum}`);

//Challenge #2
let first = 1;
let second = 2;
let third = 0;
let evens = [2];
let sum2 = 0;

while ( third < 4000000) {
    third = first + second;
    if (third % 2 === 0) {
        sum2 = sum2 + third;
    } 
    first = second;
    second = third;
}
console.log(`Challenge #2 is: ${sum2}`);

//Challenge #3
let testNumber = 600851475143 ;
let primes = [];

for (let divisible = 2;divisible <= testNumber;divisible++) {
        while (testNumber % divisible === 0) {
        testNumber = testNumber/divisible;
        primes.push(divisible)
        }
    }

console.log(`Challenge #3 is: ${primes}`);




