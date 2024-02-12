let givenArray = [15, 30, 42, 25];
let sum = 0;
let average = 0;

for(let i = 0; i < givenArray.length; i++) {
    sum += givenArray[i];
}

average = sum / givenArray.length;

console.log(average);