// Traversing the DOM
let itemList = document.querySelector('#items');
// QUERY PARENT 
// parentNode
console.log(itemList.parentNode);

// parentElement mostly the same as parentNode
console.log(itemList.parentElement);

// QUERY CHILD
// childNodes
// Return a NodeList, text nodes are "line breaks"!
console.log(itemList.childNodes);

// children
// Return a HTMLCollection without "line breaks" as text nodes
console.log(itemList.children)

// firstChild
// Return the first node counting "line breaks" text nodes. USELESS

// firstElementChild
// Return the first node without counting "line breaks" text nodes.
console.log(itemList.firstElementChild);

// lastElementChild
console.log(itemList.lastElementChild);

// QUERY SIBLING
// nextSibling
// Including "line breaks" text nodes...

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

// Create DOM element
// createElement
let newDiv = document.createElement('div');
// ADD CLASS NAME
newDiv.className = 'hello';
// ADD ATTRIBUTE
newDiv.setAttribute('title', "Hello DIV!");
// CREATE TEXT NODE
let newDivText = document.createTextNode("Hello World");
// ADD TEXT TO DIV
newDiv.appendChild(newDivText);
// INSERT INTO THE DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
// parent.insertBefore(newElement, childElement)
container.insertBefore(newDiv, h1);

// Remove DOM element
newDiv.remove();
console.log(newDiv);