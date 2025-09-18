let hours = document.querySelector(".hoursNum");
let bars = document.querySelector(".bars");
let hoursNumbers = "";
let barsElements = "";

for (let i = 1; i <= 12; i++) {
    hoursNumbers += `
    <span style="--hour: ${i}"><p>${i}</p></span>
    `;
}
hours.innerHTML = hoursNumbers;

for (let i = 1; i <= 60; i++) {
    barsElements += `
    <span style="--bar: ${i}"><p></p></span>
    `;
}
bars.innerHTML = barsElements;

const handHour = document.querySelector(".hand.hours");
const handMinute = document.querySelector(".hand.minutes");
const handSecond = document.querySelector(".hand.seconds");
/*
------------------------------
60 seconds = 360deg => 1 second = 360 / 60 = 6deg
60 minutes = 360deg => 1 minute = 360 / 60 = 6deg
12 hours = 360deg => 1 hour = 360 / 12 = 30deg

1 hour = 30deg
60 minutes = 30deg
1 minute = 30 / 60 = 0.5deg or 1/2 deg

hours => (hours * 30 + minutes / 2)
------------------------------
*/
function currentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handSecond.style.transform = `rotate(${currentSeconds * 6}deg)`;
    handMinute.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handHour.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2
        }deg)`;
}

setInterval(currentTime, 1000);
