let userNumber = +prompt("enter any number"); 
let numberString = userNumber.toString();
let stringLength = numberString.length;
let sum = 0;

for(let i = 0; i < stringLength; i++) {
    sum += Number(numberString[i]);
}

console.log(sum);