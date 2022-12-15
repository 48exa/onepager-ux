const bgBlur = document.querySelector(".background-blur"),
    cookiePopup = document.querySelector(".cookies-popup"),
    cookieH3 = document.querySelector(".cookies-popup h3"),
    cookieP = document.querySelector(".cookies-popup p"),
    popupScreen = document.querySelector(".popup"),
    vid = document.querySelector(".popup video"),
    xButton = document.querySelector(".popup .circle"),
    adText = document.querySelector(".popup h1"),
    buttonThin = document.querySelector(".popup .thin"),
    buttonMedium = document.querySelector(".popup .medium"),
    buttonWide = document.querySelector(".popup .wide")


buttonThin.style.display = "none"
buttonMedium.style.display = "none"
buttonWide.style.display = "none"
popupScreen.style.display = "none"

let cookies = "not set",
    randInt = 0,
    src = vid.getAttribute('src')


/* <-- COOKIES --> */

function clear() {
    localStorage.clear()
}

function cookieAccept() {
    cookies = "working"
    localStorage.setItem('value', cookies)
    cookieCheck()
}

function cookieReject() {
    cookies = "not working"
    localStorage.setItem('value', cookies)
    cookieCheck()
}

function cookieCheck() {
    if (localStorage.getItem('value') == "not working") {
        cookieH3.innerHTML = "We don't value your privacy."
        cookieP.innerHTML = "Accept the cookies."
        cookiePopup.style.height = "175px"
    } else if (localStorage.getItem('value') == "working") {
        bgBlur.style.display = "none"
        cookiePopup.style.display = "none"
    }
}

if (localStorage.getItem('value') == "not working") {
    cookieH3.innerHTML = "We don't value your privacy."
    cookieP.innerHTML = "Accept the cookies."
    cookiePopup.style.height = "175px"
} else if (localStorage.getItem('value') == "working") {
    bgBlur.style.display = "none"
    cookiePopup.style.display = "none"
}

/* <-- POP UP AD --> */

function randomInt() {
    randInt = Math.floor(Math.random() * 30);
}

function placeButton() {
    if (src == "/ads/gardenscapes.mp4") {
        buttonThin.style.display = "block"
    }
}

function closeAd() {
    --randInt

    if (randInt == 0) {
        vid.style.display = "none"
        bgBlur.style.display = "none"
        xButton.style.display = "none"
        adText.style.display = "none"
    }
}

function openAd() {
    bgBlur.style.display = "grid"
    popupScreen.style.display = "grid"
    xButton.style.display = "grid"
    adText.style.display = "block"
    randomInt()
    placeButton()
}

