let palindrome;
let largestPalindrome = 0;
for(let i=100;i < 1000;i++) {
    for(let j=100;j < 1000;j++) {
        palindrome = i * j
        if(palindrome > largestPalindrome 
            && palindrome.toString().length === 6 
            && palindrome.toString()[0] === palindrome.toString()[5] 
            && palindrome.toString()[1] === palindrome.toString()[4] 
            && palindrome.toString()[2] === palindrome.toString()[3]) 
            {
            largestPalindrome = palindrome
        }
    }
} 
console.log(`The largest palindore for two 3-digit numbers is: ${largestPalindrome}`);