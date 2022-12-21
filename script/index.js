/* <-- LOAD TIME --> */

function color() {

}

/* <-- LOAD TIME --> */
const bgBlur = document.querySelector(".background-blur"),
    cookiePopup = document.querySelector(".cookies-popup"),
    cookieH3 = document.querySelector(".cookies-popup h3"),
    cookieP = document.querySelector(".cookies-popup p"),
    popupScreen = document.querySelector(".popup"),
    vid = document.querySelector(".popup video"),
    adText = document.querySelector(".popup h1");

popupScreen.style.display = "none"

let cookies = "not set",
    randInt = 0,
    placeholder = 12034,
    src = vid.getAttribute('src'),
    audio = new Audio("aud/Elevator.mp3"),
    audio2 = new Audio("aud/Elvator.mp3"),
    audio3 = new Audio("aud/What.mp3");
    audio4 = new Audio("aud/DANGER.mp3");
    audio5 = new Audio("aud/ive killed god may the remnants help me.mp3");

/* <-- COOKIES --> */

document.querySelector(".download-btn").onclick = function () {
    popUpAd()
}

function clear() {
    localStorage.clear()
}

function cookieAccept() {
    cookies = "working"
    localStorage.setItem('value', cookies)
    cookieCheck()
    audio.play()
    audio2.play()
    audio3.play()
    audio.loop=true;
    audio2.loop=true;
    audio3.loop=true;
    audio4.pause();
    audio5.pause();
}

function cookieReject() {
    cookies = "not working"
    localStorage.setItem('value', cookies)
    cookieCheck()
    audio4.play()
    audio4.loop=true;
    audio5.play()
    audio4.loop=true;
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

function music() {}

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
    randInt = Math.floor(Math.random() * 7) + 1
}

function hardClose() {
    bgBlur.style.display = "none"
    popupScreen.style.display = "none"
    vid.pause()
}

function closeAd() {
    if (placeholder > 50) {
        placeholder = Math.floor(Math.random() * 20)
    }
    if (placeholder == 0) {
        hardClose()
        placeholder = 12034
    }
    --placeholder
}

function popUpAd() {
    randomInt()
    vid.src = `/ads/${randInt}.mp4`
    vid.autoplay = true;
    bgBlur.style.display = "grid"
    popupScreen.style.display = "grid"
}

document.querySelector('.popup video').addEventListener('ended', myHandler, false);
function myHandler(e) {
    hardClose()
}

/* <-- END --> */