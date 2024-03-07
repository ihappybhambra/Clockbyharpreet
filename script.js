function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hours');
    const minuteHand = document.querySelector('.minutes');
    const secondHand = document.querySelector('.seconds');

    const hourDegrees = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, half a degree per minute
    const minuteDegrees = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degree per second
    const secondDegrees = seconds * 6; // 6 degrees per second

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

updateClock();
setInterval(updateClock, 1000);