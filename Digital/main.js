let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let AmPm = document.querySelector(".AmPm");
let format = document.querySelector(".format");
const dateBox = document.querySelector(".date");

let is24 = false;
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

function updateDate() {
    const now = new Date();
    const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
    dateBox.textContent = now.toLocaleDateString("en-US", options);

    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);
    const Midnight = tomorrow - now;

    setTimeout(updateDate, Midnight);
}

updateDate();
setInterval(currentTime, 1000);

