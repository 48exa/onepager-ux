const BG_BLUR = document.querySelector(".background-blur"),
    COOKIE_POPUP = document.querySelector(".cookies-popup"),
    COOKIE_H3 = document.querySelector(".cookies-popup h3"),
    COOKIE_P = document.querySelector(".cookies-popup p")

let cookies = "not set"

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
        COOKIE_H3.innerHTML = "We don't value your privacy."
        COOKIE_P.innerHTML = "Accept the cookies."
        COOKIE_POPUP.style.height = "175px"
    } else if (localStorage.getItem('value') == "working") {
        BG_BLUR.style.display = "none"
        COOKIE_POPUP.style.display = "none"
    }
}

if (localStorage.getItem('value') == "not working") {
    COOKIE_H3.innerHTML = "We don't value your privacy."
    COOKIE_P.innerHTML = "Accept the cookies."
    COOKIE_POPUP.style.height = "175px"
} else if (localStorage.getItem('value') == "working") {
    BG_BLUR.style.display = "none"
    COOKIE_POPUP.style.display = "none"
}

