// Interactive JS
// addEventListener(eventName, callBack)
let button = document.getElementById('button');

button.addEventListener('click', buttonClick);
// function buttonClick() {
//     console.log("Button clicked");
// }

// button.addEventListener('mouseover', buttonMouseOver);
// function buttonMouseOver() {
//     console.log("Button mouseovered");
// }

function buttonClick(e) {
    console.log(e); // event object, here is "click"
    console.log(e.target); // DOM element that the event is fired from
    console.log(e.clientX); // x coordinate from window
    console.log(e.clientY); // y coordinate from window
    console.log(e.offsetX); // x coordinate from selected element
    console.log(e.offsetY); // y coordinate from selected element
    console.log(e.altKey); // return boolean if holding alt key when click
    console.log(e.ctrlKey); // return boolean if holding ctrl key when click
    console.log(e.shiftKey); // return boolean if holding shift key when click
}

// EVENT TYPES
// 'dblclick': double click
// 'mousedown': mouse down
// 'mouseup': mouse up
// 'mouseenter': mouse enter
// 'mouseleave': mouse leave
// 'mouseover': mouse over the inner(child) elements
// 'mouseout': mouse out the inner(child) elements
// 'mousemove': mouse move
// 'keydown': keyboard key down
// 'keyup': keyboard key up
// 'keypress': event fired when press down a key that display a character, mostly like keydown
// 'focus': event fired when click inside the input
// 'blur': focus out the input
// 'cut': event fired when cut content
// 'paste': event fired when paste content
// 'input': anything we do to the input
// 'change': dropdown select option changed
// 'submit': submit button clicked, ADD THIS EVENT TO FORM RATHER THAN SUBMIT!

document.addEventListener('mousemove', track);
let output = document.querySelector('.output');
function track(e) {
    output.innerHTML = `<h3>MouseX: ${e.clientX} </h3><h3>MouseY: ${e.clientY} </h3>`;
    // style backgroudcolor trick
    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 40)`;
}

// GET DATA FROM INPUT (keydown event)
let itemInput = document.querySelector('input[type="text"]');

itemInput.addEventListener('keydown', keyDown);

function keyDown(e) {
    console.log(e.target.value);
}

// SELECT CHANGE
let select = document.querySelector('select');
select.addEventListener('change', selectChange);

function selectChange(e) {
    console.log(e.type);
}

// SUBMIT
let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    // SUBMIT INPUT DEFAULT REFREASH THE PAGE!
    // e.preventDefault();
    e.preventDefault();
    console.log(e.type);
}

