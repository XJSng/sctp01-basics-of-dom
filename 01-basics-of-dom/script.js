// All html files have access to the DOM object
// By clicking document in the console, you can see the full html file
// You will see the whole html file in the document object
// console.dir(document) == list out all the special properties of the DOM
// the childNode of the document is HTML and in the HTML there is two child, head and body
let title = document.querySelector("#title")
// .querySelector() lets us select one html element, similar to selecting on CSS, we need to use "CSS selectors"
// .innerHTML to change the text in the html element
title.innerHTML = "Goodbye world"

// DOM Manipulation
// 1. select the HTML element (node object) .querySelector()
// 2. apply the changes that we want .innerHTML = somethingSomething
title.style.fontFamily = "Verdana"
title.style.backgroundColor = "red"
title.style.color = "white"

// Why use this over CSS?
// it is so that we can add easier interactions with specific elements
// lets select the button element
let btn = document.querySelector("#my-btn")
// let the button response for an event (things like click, dbl clicks, hover, keyboard, forms, gestures, etc.)
// there are two parameters:
// first parameter = the type of event
// second parameter = the function to be execute when the event occurs
// When button is clicked, the text, font, and colors will change
btn.addEventListener("click", function () {
    title.innerHTML = "Hello world again!"
    title.style.fontFamily = "Arial"
title.style.backgroundColor = "#f3f3f3"
title.style.color = "black"
})
// This is known as event driven programming
// We normally use anonymous functions for two reasons
// 1) No need to think of a name
// 2) most likely the function is only used for one button so need to write a proper function for it. 

// select by class name (querySelector will only selce the first element)
let firstFruit = document.querySelector(".first-fruit")
let fruits = document.querySelectorAll(".fruits")
firstFruit.style.backgroundColor = "yellow"
//fruits.style.backgroundColor = "red" // WILL NOT WORK CAUSE FRUITS IS AN ARRAY
// querySelectorAll usually gives you an array of elements
// We got to cycle through it in a for loop
for (f of fruits) {
    f.style.backgroundColor = "#AAEFDF"

}


// getElementById allows us to retrieve an element by its id
let subheading = document.getElementById("subtitle") // NO # required 
subheading.style.color = "white";
subheading.style.backgroundColor = "#358600";
subheading.innerHTML = "Fruits!!!";

// ALL THE OTHER WAYS OF SELECTING
// document.getElementById -- select by an Id
// document.getElementsByClassName -- select by a class and WILL return an array
// document.getElementsByTagName -- select by tag name
// Usually querySelector is enough to cover all of the getElements

// Always have the console open to each for errors.
// Most of the time, people will write anonymous function due to the limited function names