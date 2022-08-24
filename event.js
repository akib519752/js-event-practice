function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const makeWhiteButton = document.getElementById('make-white');
makeWhiteButton.onclick = makeWhite;
function makeWhite() {
    document.body.style.backgroundColor = 'white';
}


const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.background = 'purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
//we will use it
document.getElementById('make-golden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

function handle() {
    const handler = document.getElementById('add');
    handler.innerText = 'Handle by function on onclick event';
}


document.getElementById('event-listener').addEventListener('click', function () {
    const handler = document.getElementById('add');
    handler.innerText = 'event updated by event;'
})

//adding event from input
document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})
////////////////////////////////////////////////////////////////////////////////////////



console.log('hello')
