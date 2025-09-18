let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let AmPm = document.querySelector(".AmPm");
let format = document.querySelector(".format");

let is24 = true;
format.addEventListener("click", () => {
    is24 = !is24;
    format.innerHTML = is24 ? "12 Hours" : "24 Hours";
})

function currentTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ap = (h >= 12) ? "PM" : "AM";

    if(!is24) h = h % 12 || 12;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    AmPm.innerHTML = is24? "" : ap;
}

setInterval(currentTime, 1000);