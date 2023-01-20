const randomNumber = 10;

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type");
  console.log(value);

  console.log(randomNumber + value);
});

// Data Types

// String
const text = "some text";
// Number
const N = 10;
// Boolean
const bool = true;
// Null
const res = null;

console.log(typeof text);
console.log(typeof N);
console.log(typeof bool);
console.log(typeof res);

// ARRAYS

const friends = ["anna", "Joe", "David", "John", 50];
console.log(friends);

let bestFriend = (friends[2] = "David The Great");
console.log(bestFriend);
console.log(friends[3]);

// FUNCTIONS

// Declare the function
function greet(name) {
  console.log("Hello there", name);
}

// Invoke the function
greet();
// greet bob
greet("Bob");
// greet anna
greet("Anna");

const wallHeight = 10;

function calculate(value) {
  console.log("The value in cm is: " + value * 2.54 + " cm");
}

const width = calculate(100);
const height = calculate(wallHeight);
const dimensions = [width, height];

// Challenge
function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}
console.log(calculateTotal(100, 10));

const order1 = calculateTotal(100, 12);
const order2 = calculateTotal(50, 6);
console.log(order1, order2);

// OBJECTS

const person = {
  name: "David",
  age: 30,
  education: true,
  siblings: ["alex", "john", "walter"],
  greeting: function () {
    console.log("Hello, name is Doe");
  },
};

// to access object
console.log(person);

// Challenge

const car = {
  make: "Ford",
  model: "Escape XLT",
  year: 2012,
  colors: ["white", "black", "blue"],
  hybrid: false,
  drive() {
    console.log("Driving...");
  },
  stop() {
    console.log("Stopping...");
  },
};
console.log(car.make, car.colors[0]);
car.drive();

if (true) {
  console.log("True");
}

// Challenge

const person1 = {
  name: "David",
  age: 26,
  status: "resident",
};
const person2 = {
  name: "Alex",
  age: 32,
  status: "tourist",
};

if (person1.age > 18 && person1.status === "resident") {
  console.log("Yes");
} else {
  console.log("No");
}

// LOOPS

let amount = 10;

while (amount > 0) {
  console.log("I have " + amount + " dollars and i'am going to mall");
  amount--;
}

let i;
for (i = 0; i < 10; i++) {
  console.log("and the number is : " + i);
}



function converts() {
  document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    val1 = document.getElementById("temp").value;
    const math = ((val1 - 32) * 5) / 9;
    console.log(math);
    //return math;
  });
}

function personName(namer) {
  return `Good morning ${namer}`;
}

function convertTempature(nam, cb) {
  const tempata = 100;
  const result = ((tempata - 32) * 5) / 9;
  console.log(`${cb(nam)}, tempature is ${result}`);
}

convertTempature('david', personName);



const people = [
  {
    name: "bob",
    age: 20,
    position: "dev",
    id: 1,
  },
  {
    name: "peter",
    age: 25,
    position: "HR",
    id: 2,
  },
  {
    name: "susy",
    age: 30,
    position: "boss",
    id: 3,
  },
];

// FOREACH METHOD

// function showPerson(someParameter) {
//   console.log(someParameter.position);
// }
//people.forEach(showPerson)

// OR you can do it this way
people.forEach(function(item) {
  console.log(item.position.toUpperCase());
})


// MAP METHOD

const ages = people.map(function(someP) {
 return someP.age;
});

const newPeople = people.map(function(someP) {
  return {
    firstName: someP.name.toUpperCase(),
    oldAge: someP.age + 1
  }
})


// itteriate over array, then pull out "name" value, and place it in heading and display on screen
const names = people.map(function(person) {
  return `<h1>${person.name}</h1><p>${person.age}</p>`
})

//document.body.innerHTML = names.join('');
console.log(names);


// FILTER METHOD

const youngPeople = people.filter(function(person) {
  return person.age <= 26;
})

const developers = people.filter(function(person) {
  return person.position === 'HR';
})

console.log(youngPeople);
console.log(developers);


// FIND METHOD

const p = people.find(function(person) {
  return person.id === 2;
})

console.log(p);