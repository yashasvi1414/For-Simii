function checkPassword() {
    const entered = document.getElementById("password-input").value;
    const secret = "141719"; // Change your password here

    if (entered === secret) {
        // Hide login and show content
        document.getElementById("login-screen").style.display = "none";
        const content = document.getElementById("protected-content");
        content.style.display = "block";
        setTimeout(() => { content.style.opacity = "1"; }, 10);
        
        startCountdown();
    } else {
        alert("Incorrect code! ❤️");
    }
}

function startCountdown() {
    const targetDate = new Date("February 19, 2026 07:00:00").getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
}
