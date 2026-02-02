const targetDate = new Date("February 18, 2026 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").innerHTML = "<h1>It's Time! ❤️</h1>";
    }
}, 1000);