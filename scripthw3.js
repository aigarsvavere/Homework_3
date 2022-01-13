console.log("Fizzbuzz");

const resultParent = document.getElementById("results");

const genButton = document.getElementById("genbut");
const btnClear = document.getElementById("clearbut");
const minCount = document.getElementById("mincount");
const fizzButton = document.getElementById("genFizz");
const buzzButton = document.getElementById("genBuzz");
const fizzBuzzButton = document.getElementById("genFizzBuzz");
let idCount = 0


function createNewElement(parent, tag, id="", classes="", text) {
    const newEl = document.createElement(tag);
    const newContent = document.createTextNode(text);
    newEl.appendChild(newContent);
    newEl.id = "myId" + id;
    
    for (const newClass of classes) {
        newEl.classList.add(newClass);
    }

    parent.appendChild(newEl);
}

function onGenerateClick(ev) {
    onClearAllElements();
    const count = parseInt(minCount.value);
    console.log("will generate elements " + count);
    for (let i=1; i<=count; i++) {
        txt = i;
        classArray = ["strong"];
        if (i % 15 == 0) {
            classArray.push("gradient");
            txt = "FizzBuzz";
        } else if (i % 3 == 0) {
            classArray.push("light");
            txt = "Fizz";
        } else if (i % 5 == 0) {
            classArray.push("blueOne");
            txt = "Buzz";
        }
    createNewElement(resultParent, "div", id=i, classes=classArray, text=txt);
    }
}

function onGenerateFizzClick(ev) {
    onClearAllElements();
    const count = parseInt(minCount.value);
    console.log("Will generate Fizz");
    for (let i=1; i<=count; i++) {
        txt = i;
        classArray = ["strong"];
        if (i % 3 == 0) {
            classArray = ["light"];
            txt = "Fizz Nr = " + i;
            createNewElement(resultParent, "div", id=i, classes=classArray, text=txt);
        }
    }
}

function onGenerateBuzzClick(ev) {
    onClearAllElements();
    const count = parseInt(minCount.value);
    console.log("Will generate Buzz");
    for (let i=1; i<=count; i++) {
        txt = i;
        classArray = ["strong"];
        if (i % 5 == 0) {
            classArray = ["blueOne"];
            txt = "Buzz Nr = " + i;
            createNewElement(resultParent, "div", id=i, classes=classArray, text=txt);
        }
    }
}

function onGenerateFizzBuzzClick(ev) {
    onClearAllElements();
    const count = parseInt(minCount.value);
    console.log("Will generate Fizz-Buzz");
    for (let i=1; i<=count; i++) {
        txt = i;
        classArray = ["strong"];
        if (i % 15 == 0) {
            classArray = ["gradient"];
            txt = "Fizz-Buzz Nr = " + i;
            createNewElement(resultParent, "div", id=i, classes=classArray, text=txt);
        }
    }
}

btnClear.onclick = onClearAllElements;

fizzButton.onclick = onGenerateFizzClick;

buzzButton.onclick = onGenerateBuzzClick;

fizzBuzzButton.onclick = onGenerateFizzBuzzClick;
  
genButton.onclick = onGenerateClick;

function onClearAllElements() {
    console.log("will clear created elements!");
    while (resultParent.firstChild) {
        resultParent.removeChild(resultParent.firstChild);
    }   
}