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
async function typeTextElementByID(elementID, ms) {
    const text = document.getElementById(elementID).textContent
    let textElement = document.getElementById(elementID)
    let tempText = ""

    textElement.innerHTML = tempText
    await sleep(ms)

    for(let i in text){
        tempText += text[i]
        textElement.innerHTML = tempText
        await sleep(ms)
    }
}

// RUN //
//blinking_() // hud menu thing
//typeTextElementByID('site-location', 300) // hud menu thing
typeTextElementByID('typethis', 150)
