let userString = prompt("Enter anything prohibited");

let firstCharacter = userString[0];
let lastCharacter = userString[userString.length - 1];
let middleCharacter = userString.slice([1], userString.length - 1);

let wholeReplace = lastCharacter + middleCharacter + firstCharacter;

console.log(wholeReplace);