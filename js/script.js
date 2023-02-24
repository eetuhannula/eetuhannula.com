// SLEEP
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Blinking "_"
const blink = document.getElementById('blinking_');

async function blinking_() {
    while(true) {
        blink.innerHTML = "_"
        await sleep(600)
        blink.innerHTML = ""
        await sleep(600)
    }
}

// Typewriting text element from element id
async function typeTextElementByID(elementID) {
    const text = document.getElementById(elementID).textContent
    let textElement = document.getElementById(elementID)
    let tempText = ""

    textElement.innerHTML = tempText
    await sleep(300)

    for(let i in text){
        tempText += text[i]
        textElement.innerHTML = tempText
        await sleep(300)
    }
}

// Typewriting text element from element class
async function typeTextElementByClass(elementClass) {
    const text = document.getElementsByClassName(elementClass)[0].innerHTML
    let textElement = document.getElementsByClassName(elementClass)
    let tempText = ""

    for(let i in text){
        tempText += text[i]
        textElement[0].innerHTML = tempText
        await sleep(100)
    }
}

// RUN //
blinking_()
typeTextElementByID('site-location')

if (document.querySelector(".typethis")){
    typeTextElementByClass('typethis') 
}
