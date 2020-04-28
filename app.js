// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var proGrad1 = "pavanbhagathi";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(proGrad1);
0; // 1.3 Create a variable `ProGrad-2` with the navigator's name.
var proGrad2 = "varsha";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(proGrad2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var driverLength = proGrad1.length;
var navigatorLength = proGrad2.length;

if (driverLength > navigatorLength) {
  console.log("The driver has the longest name");
} else if (driverLength < navigatorLength) {
  console.log("seems that the navigator has the longest name");
} else {
  console.log("Wow, you both have equally long names");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.
var enterName = "ProGrad";
var check = "";
for (let index = 0; index < enterName.length; index++) {
  check = enterName[index];
  console.log(check);
  if (
    check == "a" ||
    check == "e" ||
    check == "i" ||
    check == "o" ||
    check == "u"
  ) {
    console.log(check + "===it contains vowels::" + index);
  } else {
    console.log(check + "===no vowels:::" + index);
  }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var casechar = "UpperCaseLetter";
var upper = 0;
var lower = 0;
var special = 0;
for (let index = 0; index < casechar.length; index++) {
  var element = casechar[index];
  console.log(element);

  if (element == element.toUpperCase()) {
    upper++;
  } else if (element == element.toLowerCase()) {
    lower++;
  } else {
    console.log("Special letter count::");
  }
}
console.log("UpperCase letter count::" + upper);
console.log("Lowercase letter count::" + lower);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
for (let index = 0; index < proGrad1.length; index++) {
  const element = proGrad1[index];
  console.log("" + element + ",");
}
console.log("");
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
for (let index = proGrad2.length - 1; index >= 0; index--) {
  const element = proGrad2[index];
  console.log("" + element + ",");
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"

console.log(proGrad1 + "  " + proGrad2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(proGrad2 + "  " + proGrad1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let lexicographicOrder = ["pavanganesh", "varsha"];
console.log(lexicographicOrder.sort());
var result = "";
if (proGrad1.localeCompare(proGrad2) == -1) {
  result = proGrad1;
  console.log("Pavan came frist" + result);
} else if (proGrad1.localeCompare(proGrad2) == 1) {
  result = proGrad2;
  console.log("Varash came frist" + result);
} else {
  console.log("Both are equal");
}

console.log(result);
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
