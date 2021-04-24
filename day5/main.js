const info = document.querySelector("h2");

function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const currentDay = new Date();

    const totalSeconds = (xmasDay - currentDay) / 1000;
    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minute = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;

    info.innerText = `${screenTime(day)}d ${screenTime(hour)}h ${screenTime(minute)}m ${screenTime(second)}s`

}

function screenTime(time) {
    return time < 10 ? '0' + time : time;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
