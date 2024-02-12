let userString1 = prompt("Enter a word");
let userString2 = prompt("Enter a word");

if (userString1.length === userString2.length) {
    console.log(`${userString1} and ${userString2} is equal`);
} else {
    console.log(`${userString1} and ${userString2} is not equal`);
}