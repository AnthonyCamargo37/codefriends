/*
 * PROBLEM `checkData`
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
  if (typeof inputString === "string") {
    return inputString.length === 3 ? true : false;
  } else {
    throw new Error("Invalid input provided! Not a string!");
  }
}

/*
 * PROBLEM `concatenateArrays`
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  } else {
    throw new Error("Invalid input provided! Not an Array!");
  }
}

/*
 * PROBLEM `fixProperNoun`
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
  const letters = /^[a-zA-Z]+$/;
  if (typeof noun === "string") {
    if (noun.match(letters)) {
      noun = noun.toLowerCase();

      for (let i = 0; i < noun.length; i++) {
        if (i === 0) {
          properNoun = noun[0].toUpperCase();
        } else {
          properNoun = properNoun + noun[i];
        }
      }
      return properNoun;
    } else {
      throw new Error("Invalid string provided!");
    }
  } else {
    throw new Error("Invalid input provided! Not a proper noun!");
  }
}

/*
 * PROBLEM `sortLetters`
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
  if (typeof inputString === "string") {
    arrayString = inputString.split("");
    console.log(arrayString);
    sortedString = arrayString.sort();
    return sortedString.join("");
  } else {
    throw new Error("Invalid input provided! Not a string!");
  }
}

/*
 * PROBLEM `absVal`
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
  if (typeof integer === "number") {
    if (integer < 0) {
      integer = integer.toString().replace("-", "");
      return parseFloat(integer);
    } else {
      return integer;
    }
  } else {
    throw new Error("Invalid input provided! Not a number!");
  }
}

/*
 * PROBLEM `myMin`
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function myMin(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    if (x < y) {
      return x;
    } else {
      return y;
    }
  } else {
    throw new Error("Invalid input provided! Not a number!");
  }
}

/*
 * PROBLEM `myMax` - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */
function myMax(integerArray) {
  if (
    integerArray.filter(function (integer) {
      if (typeof integer === "string") {
        return false;
      } else {
        return true;
      }
    }).length === integerArray.length
  ) {
    integerArray.forEach(function (integer) {
      if (integer === integerArray[0]) {
        max = integer;
      } else {
        if (integer > max) {
          max = integer;
        }
      }
    });
    return max;
  } else {
    throw new Error("Invalid input provided! A string was found!");
  }
}

/*
 * PROBLEM `getMonth`
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function getMonth(integer) {
  if (typeof integer === "number" && integer <= 12 && integer >= 1) {
    switch (integer) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  } else {
    throw new Error("Invalid input provided. Not a valid Month entry");
  }
}

/*
 * PROBLEM `randomElement`
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
function randomElement(arrayOfValues) {
  if (arrayOfValues.isArray() && arrayOfValues.length !== 0) {
    randomNumber = Math.random() * arrayOfValues.length;
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber);
    return arrayOfValues[randomNumber];
  } else {
    throw new Error("Invalid input provided!");
  }
}
/*
 * PROBLEM `studentPairs`
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */
function studentPairs(studentNames) {
  if (typeof studentNames === "object" && studentNames.length !== 0) {
    randomNumber1 = Math.random() * studentNames.length;
    randomNumber1 = Math.floor(randomNumber1);
    console.log(randomNumber1);
    let randomNumber2 = randomNumber1;
    while (randomNumber1 === randomNumber2) {
      randomNumber2 = Math.random() * studentNames.length;
      randomNumber2 = Math.floor(randomNumber2);
    }
    console.log(randomNumber2);
    return (students = [
      studentNames[randomNumber1],
      studentNames[randomNumber2],
    ]);
  } else {
    throw new Error("Invalid input provided!");
  }
}

/*
 * PROBLEM `sumSquares`
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares(integer) {
  if (
    typeof integer === "number" &&
    integer > 0 &&
    Math.floor(integer) === integer
  ) {
    sum = 0;
    for (n = 1; n <= integer; n++) {
      sum += n;
    }
    mean = sum / integer;
    console.log(mean);
    sumSquared = 0;
    for (n = 1; n <= integer; n++) {
      squaredNumber = (n - mean) * (n - mean);
      console.log(squaredNumber);
      sumSquared += squaredNumber;
    }
    return sumSquared;
  } else {
    throw new Error("Invalid input provided!");
  }
}

/*
 * PROBLEM `findMaxDiff`
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff(integers) {
  if (
    integers.filter(function (integer) {
      if (typeof integer === "string") {
        return false;
      } else {
        return true;
      }
    }).length === integers.length
  ) {
    maxDiff = Math.abs(integers[0] - integers[1]);
    for (i = 0; i < integers.length - 1; i++) {
      if (Math.abs(integers[i] - integers[i + 1]) > maxDiff) {
        maxDiff = Math.abs(integers[i] - integers[i + 1]);
      }
    }
    return maxDiff;
  } else {
    throw new Error("Invalid input provided!");
  }
}
/*
 * PROBLEM `insertDashes`
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes(sentence) {
  if (typeof sentence === "string") {
    sentence = sentence.split("");
    for (i = 0; i < sentence.length - 1; i++) {
      if (sentence[i] === " " || sentence[i + 1] === " ") {
      } else {
        sentence[i] = sentence[i] + "-";
      }
    }
    return sentence.join("");
  } else {
    throw new Error("Invalid input provided!");
  }
}

/*
 * PROBLEM `mySubstring`mySubstring
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function mySubstring(word, start, finish) {
  if (
    typeof word === "string" &&
    typeof start === "number" &&
    start > 1 &&
    typeof finish === "number" &&
    finish > 1 &&
    start <= finish &&
    finish <= word.length - 1
  ) {
    let output = "";
    for (i = start; i <= finish; i++) {
      output += word[i];
    }
    return output;
  } else {
    throw new Error("Invalid input provided!");
  }
}

/*
 * PROBLEM `splitSwap`
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function splitSwap(mainArray) {
  if (mainArray.isArray()) {
    totalElements = mainArray.length;
    array1Elements = Math.floor(totalElements / 2);

    array1 = mainArray.slice(0, array1Elements);
    array2 = mainArray.slice(array1Elements, mainArray.length);

    array3 = array2.concat(array1);
    return array3;
  } else {
    throw new Error("Invalid input provided!");
  }
}

/*
 * PROBLEM `smallMultiples`
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function smallMultiples(n, k) {
  if (typeof n === "number" && typeof k === "number" && n >= 0 && k > 0) {
    multiples = 0;
    let total = 0;
    for (let multiplier = k + 1; total < n; multiplier++) {
      total = k * multiplier;
      multiples++;
    }
    return multiples;
  } else {
    throw new Error("Invalid input provided!");
  }
}
/*
 * PROBLEM `rot13`
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
function rot13(code) {
  if (typeof code === "string") {
    let encryptedCode = "";
    const letters = /^[a-zA-Z]+$/;
    if (code.match(letters)) {
      alphabetFirst = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
      ];
      alphabetSecond = [
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];

      for (let i = 0; i < code.length; i++) {
        for (let j = 0; j < 13; j++) {
          if (code[i] === alphabetFirst[j]) {
            encryptedCode += alphabetSecond[j];
            break;
          } else if (code[i] === alphabetSecond[j]) {
            encryptedCode += alphabetFirst[j];
            break;
          }
        }
      }
      return encryptedCode;
    }
  } else {
    throw new Error(
      "Invalid input provided! Should only contain lower-case alphabetic characters"
    );
  }
}

/*
 * BONUS #1 `derot13`
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * BONUS #2 `rotn`
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
function rotn(word, n) {
  if (typeof word === "string" && typeof n === "number") {
    let encryptedCode = "";
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    multiplier = Math.ceil(n / 26) + 1;
    for (k = 0; k < multiplier; k++) {
      alphabet = alphabet.concat(alphabet);
    }
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (word[i] === alphabet[j]) {
          encryptedCode += alphabet[j + n];
          break;
        }
      }
    }
    return encryptedCode;
  } else {
    throw new Error("Invalid input!");
  }
}

/*
 * BONUS #3 `findBoth`
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findBoth(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    newArray = [];
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          newArray.push(b[j]);
        }
      }
    }
    return newArray;
  } else {
    throw new Error("Invalid Input!");
  }
}

/*
 * BONUS #4 `countBoth`
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function countBoth(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    count = 0;
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          count++;
        }
      }
    }
    return count;
  } else {
    throw new Error("Invalid Input!");
  }
}

/*
 * BONUS #5 `isDiagonalMatrix`
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function isDiagonalMatrix(matrix) {
  if (!Array.isArray(matrix)) {
    throw new Error("Invalid Input for matrix!");
  }

  diagonalCount = matrix.length;
  rowCount = 1;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        return false;
      }
    }
  }
}
console.log(isDiagonalMatrix(1));
/*
 * BONUS #6 `isAnagram` - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * BONUS #7 `validateParentheses` - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * BONUS #8 `flattenArray` - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */
