// SHOW THE DOCUMENT OBJECT 
// (console.dir(object) shows hierachy of an object)
// console.dir(document);

// SHOW CURRENT URL
console.log(document.URL); // http://127.0.0.1:5500/index.html
// SHOW CURRENT DOMAIN NAME
console.log(document.domain); // 127.0.0.1
// SHOW WEBPAGE TITLE
console.log(document.title);
// SHOW head DOM (has events as properties default set to null)
console.log(document.head);
// SHOW body DOM
console.log(document.body);
// SHOW ALL HTML DOMs IN AN ARRAY
console.log(document.all);
// SHOW forms DOM
console.log(document.forms);

// SHOW JSON in table format
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
let datas = [
    new User("Ashley", 18, "test1@mail.com"),
    new User("Bruce", 24, "test2@mail.com"),
    new User("Randy", 28, "test3@mail.com"),
    new User("Shaw", 38, "test4@mail.com"),
]
console.table(datas);

// SELECTORS
// 1. GET ELEMENT BY ID
console.log(document.getElementById("header-title"));

// innerText, innerHTML, textContent
// <p id="test">    This element    contains <span>an inner span</span>. </p>
// The values of these properties of the "test" paragraph will be:
// innerText: "This element contains an inner span."  :point_left: Just the text, trimmed and space-collapsed.
// innerHTML: " This element     contains <span>an inner span</span>. "  :point_left: All spacing and inner element tags.
// textContent: " This element     contains an inner span. "  :point_left: Spacing, but no tags.

// ADD NEW DOM IN DOM
let headerTitle = document.getElementById("header-title");
headerTitle.innerHTML ="<h3>New DOM</h3>";

// CHANGE CSS STYLE
// ex: css property: border-bottom
let mainHeader = document.getElementById("main-header");
mainHeader.style.borderBottom = "solid 3px #000";

// span vs div
// span: inline element, it's on the same line as element before and after
// div: block element, it's on a seperated line

// 2. GET ELEMENTS BY CLASSNAME
// Return a HTMLCollection (array-like object) of elements
let items = document.getElementsByClassName('list-group-item');
console.log(items);

// 3. GET ELEMENTS BY TAGNAME
let li = document.getElementsByTagName('li');
console.log(li);

// 4. QUERY SELECTOR (identical to jQuery $)
// Return the first element meet the query name(tag, class, id...any css selectors, psudo-selectors...)
let header = document.querySelector('#main-header');
console.log(header);

let input = document.querySelector('input');
input.value = "Hello World";

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

// 5. QUERY SELECTOR ALL
// Return all elements in NodeList (can apply array methods)
let titles = document.querySelectorAll('.title');
console.log(titles);

let odds = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odds.length; i += 1) {
    odds[i].style.backgroundColor = '#f4f4f4';
}
