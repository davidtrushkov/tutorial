
// getElementById method
const button = document.getElementById('btn').style.color = 'red';

// getElementByClassName
const buttonClass = document.getElementsByTagName('h1');
buttonClass[0].style.fontSize = '3em'


// querySelector and querySelectorAll
const result = document.querySelector('#result');
result.style.backgroundColor = 'lightgray';

// Target last item
const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

// Target "li" list and change color for classes
const list = document.querySelectorAll('.special');
list.forEach(function(item) {
    item.style.color = 'green';
});


// DOM Children
const res = document.querySelector('#result');
    // Target the children of unordered list
    const children = res.children;


// Navigate DOM - parentElement
const heading = document.querySelector('h2');
console.log(heading.parentElement.style.color = 'red');

// previous sibling
const firstList2 = document.querySelector("#last");
const second2 = (firstList2.previousSibling.previousSibling.style.color = "orange");
console.log(second2);

// next sibling
const firstList = document.querySelector("#first");
const second = (firstList.nextSibling.nextSibling.style.color = "yellow");
console.log(second);

// Get data inside an element
const head = document.getElementById('heading').firstChild.nodeValue;
console.log(head);


// innerText method
const heads = document.createElement('h2');
heads.innerText = `I'am a dynamic heading`;

// prepend method
document.body.prepend(heads);

// remove method
const remove = document.querySelector('#result');
//remove.remove();

//innerHTML method
const secondHeading = document.getElementById("secondHeading");
secondHeading.innerHTML = `<div>Hello</div>`;


// click Events
const bt = document.querySelector('.btn');
const headingTitles = document.querySelector(".headingTitle");

function changeColors() {
    let hasClass = headingTitles.classList.contains('red');
    if (hasClass) {
        headingTitles.classList.remove('red');
    } else {
        headingTitles.classList.add("red");
    }
}

bt.addEventListener("click", changeColors);

// bt.addEventListener('click', function() {
//     headingTitles.classList.add('red')
// });


// Mouse events
const clickMeBTN = document.querySelector(".btn");

clickMeBTN.addEventListener('click', function() {
    console.log('You clicked Me');
})

clickMeBTN.addEventListener("mousedown", function () {
  console.log("You clicked down");
});

clickMeBTN.addEventListener("mouseenter", function () {
  console.log("You clicked mouse enter");
});


// key events
const tempInput = document.getElementById('temp');
tempInput.addEventListener('keypress', function() {
    console.log('You pressed a key');
})


// ************* event object ************

// select heading and button
const heading1 = document.querySelector(".h3-heading");
const headingBTN = document.querySelector(".headingBTN");
const link = document.getElementById("link");

heading1.addEventListener('click', function(event) {
    event.currentTarget.classList.add('blue');
});


// Stop page from scrolling up
function clickLink(e) {
    e.preventDefault();
}
// initiate scroll function
link.addEventListener("click", clickLink);


// Event Propagation

const container = document.querySelector('.container');
const ls = document.querySelector(".listItems");

function showBubbling(event) {
    // Get current target
    console.log('current target', event.currentTarget);
    console.log("target", event.target);

    if (event.target.classList.contains("li")) {
      console.log("it is a link");
    }
}

// Stop propagation
function stopPropagation(event) {
    event.stopPropagation();
}

ls.addEventListener('click', showBubbling);
container.addEventListener("click", showBubbling);



// ********** Event propagation Example **********

// Target container, heading and button
const container2 = document.querySelector(".container");
//const headingBottom = document.querySelector(".bottomHeading");
const btnOutside = document.querySelector(".btnOutside");


// Set up event listener for button
btnOutside.addEventListener('click', function() {
    const element = document.createElement('h1');
    element.classList.add("bottomHeading");
    element.textContent = `I am inside the container`;
    container2.appendChild(element);
});

container2.addEventListener('click', function(e) {
    if (e.target.classList.contains('bottomHeading')) {
        console.log('Hellllloo');
    }
})







