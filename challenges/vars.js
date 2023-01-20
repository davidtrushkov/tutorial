/*
let firstName = "David";
let last_lame = "Trushkov";
let address = "main street";
address = "first street \"s\"";
console.log(firstName, last_lame, ",", address);


// String concat
const name = 'john';
const lastN = 'smith';
let fullName;
console.log("Hello there : " + name + '', lastN);


// NUMBERS
// +=
let num = 40;
num += 5;
console.log(num);

// -=
let num1 = 40;
num1 -= 5;
console.log(num1);

// ++
let num2 = 40;
num2++;
console.log(num2);

// %
const slices = 8;
const children=  3;
const amount = slices % children;
console.log(amount);

// Numbers challenge
const score1 = 98;
const score2 = 75;
const score3 = 45;
let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;

let plates = 20;
let people = 7;
let remainingPlates = plates % people;
remainingPlates +=1;

console.log("There are", remainingPlates, 'plates available');
console.log(totalScore, 'and', averageScore);


// Implicit Type Conversion
let value = '10';
let value2 = '23';
const result2 = value - value2;
console.log(result2);
*/

function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}
console.log(fullName("david", "trushkov"));
console.log(fullName("jordan", "peter"));



const nam = ['david', 'john', 'alex', 'mary', 'peter'];
const namLast = ["trushkov"];
let newArray = [];

for(let i = 0; i < nam.length; i++) {
  newArray.push(`${nam[i]} ${namLast}`);
  console.log(newArray);
}


// Calculate Total

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotalPrice(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  if (total > 100) {
    console.log(`whoa! You are spending too much`);
    return total;  
  }
  console.log(`You are good!`);
  return total;
}

const gasTotal = calculateTotalPrice(gas);
const foodTotal = calculateTotalPrice(food);

// Setup Object
console.log({
  gas: gasTotal,
  food: foodTotal
});

