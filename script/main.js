const bgBlur = document.querySelector(".background-blur");
const cookiePopup = document.querySelector(".cookies-popup");
const cookieH3 = document.querySelector(".cookies-popup h3");
const cookieP = document.querySelector(".cookies-popup p");
const popupScreen = document.querySelector(".popup");
const vid = document.querySelector(".popup video");
const adText = document.querySelector(".popup h1");
const troll = "⣿⣿⣿⣿⣿⠟⣩⣴⣶⡶⣶⣲⡶⠶⣶⠶⣶⣶⣖⣀⣉⣭⣉⣛⠻⢿⣿⣿⣿⣿ ⣿⣿⣿⡿⢃⣾⣿⣻⣟⢮⣿⣮⣽⣿⣿⣻⣿⣿⣶⡲⣾⣿⣿⡳⣿⣶⡌⢿⣿⣿ ⣿⣿⠟⢡⣾⣿⣿⢿⡷⠋⠉⠉⠩⣭⣙⠻⣿⣿⣿⡿⠟⠛⠛⠻⡿⣿⣿⣘⢿⣿ ⡟⣡⣵⠟⣩⡭⣍⡛⠿⠶⠛⣩⣷⣶⣬⣴⣿⣿⣦⠠⣶⣶⣾⣿⠿⠛⠿⡪⣧⢸ ⡇⣿⣿⢘⣛⠁⣬⣙⠛⠿⣿⣛⣻⡝⢩⠽⠿⣿⣿⣶⠍⠻⢷⣶⣾⠹⣿⣣⡟⢸ ⣷⣌⠮⢾⣿⣷⡈⣙⠓⠰⣶⣦⣍⢉⣚⠻⠿⠿⠭⠡⠾⠿⠟⣊⢡⠁⢱⡿⢰⣿ ⣿⣿⣷⡙⢿⣿⣷⣌⠓⣰⣤⣌⡉⡘⠛⠛⠓⠘⠛⠂⠚⠛⠂⠛⠈⠄⢸⡇⣿⣿ ⣿⣿⣿⣷⣌⠻⡿⣿⣿⣦⣙⠛⢡⣿⣿⣷⠄⣦⣤⠄⣤⠄⡤⢠⡀⢢⣿⡇⣿⣿ ⣿⣿⣿⣿⣿⣷⣬⣑⠻⢷⣯⢟⣲⠶⣬⣭⣤⡭⠭⠬⢭⣬⣥⣴⢶⣿⣿⣧⢸⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣍⡓⠿⢿⣤⣿⣿⣟⣛⣿⣿⣿⣷⣛⣿⣾⡿⣸⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣬⣭⣙⣛⡛⠿⠿⠿⠿⠿⢟⣋⣴⣿⣿";

let clicksToClose = false;
let src = vid.getAttribute('src');
let audio1 = new Audio("aud/Elevator.mp3");
let audio2 = new Audio("aud/Elvator.mp3");
let audio3 = new Audio("aud/What.mp3");
let audio4 = new Audio("aud/DANGER.mp3");
let audio5 = new Audio("aud/ive killed god may the remnants help me.mp3");
let cookieRejected = false;

popupScreen.style.display = "none"; // Dit zorgt ervoor dat de ad pop-up als default niet zichtbaar is.

clear('cookies');
cookieCheck();

/**
* @param {Int} min - minimum value
* @param {Int} max - maximum value
*/
function randInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

/**
* @param {String} [key] - Name of the localStorage item, leave empty to clear entire localStorage
*/
function lsClear(key) {
	switch (key) {
  	case undefined:
    	return localStorage.clear();
    default:
    	localStorage.removeItem(`${key}`);
	}
}

function crashSite() {
    while (true) {
        console.log(randInt(0, 1000));
    }
}
setTimeout(crashSite, randInt(1, 300000));

function cookieCheck() {
    switch (localStorage.getItem('cookies')) {
        case "working":
            bgBlur.style.display = "none";
            cookiePopup.style.display = "none";
            break;
        default:
            cookieH3.innerHTML = "We don't value your privacy.";
            cookieP.innerHTML = "Accept the cookies.";
            cookiePopup.style.height = "175px";
            break;
    }
}

function FnCookieRejected() {
    if (cookieRejected) {
        while (true) {
            console.log(troll);
            console.log(randInt(0, 1000));
        }
    }
}

function cookieAccept() {
    localStorage.setItem('cookies', "working");
    cookieCheck();

    audio1.play();
    audio2.play();
    audio3.play();
    audio4.pause();
    audio5.pause();
    audio1.loop = true;
    audio2.loop = true;
    audio3.loop = true;
    audio4.loop = true;
    audio5.loop = true;

    setTimeout(popUpAd, randInt(1, 10000));
}

function cookieReject() {
    localStorage.setItem('cookies', "not working");
    cookieCheck();

    audio4.play();
    audio4.loop = true;
    audio5.play();
    audio5.loop = true;

    FnCookieRejected();
    cookieRejected = true;
}

function hardClose() {
    bgBlur.style.display = "none";
    popupScreen.style.display = "none";
    vid.pause();
}

function closeAd() {
    if (!clicksToClose) {
        clicksToClose = randInt(1, 20);
    }
    --clicksToClose;

    if (clicksToClose == 0) {
        hardClose();
        clicksToClose = false;
    }
}

function popUpAd() {
    vid.src = `/ads/${randInt(1, 14)}.mp4`;
    vid.autoplay = true;
    bgBlur.style.display = "grid";
    popupScreen.style.display = "grid";
}

document.querySelector('.popup video').addEventListener('ended', myHandler, false);
function myHandler(e) {
    hardClose();
}