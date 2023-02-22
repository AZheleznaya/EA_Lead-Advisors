const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const endDate = new Date(2023, 4,31);

function updateCountdown() {
    const currentDate = new Date();
    const diff = endDate - currentDate;
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft  < 10 ? "0" + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

updateCountdown();

setInterval(updateCountdown, 1000);






