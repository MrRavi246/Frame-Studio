console.log('Frame Studio loaded');

// Set the date we're counting down to (e.g., 14 days from now)
const countDownDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(x);
        const countdownEl = document.querySelector(".countdown");
        if (countdownEl) countdownEl.innerHTML = "EXPIRED";
    }
}, 1000);