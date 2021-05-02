const header = document.querySelector(".header");

const digitalClock = document.querySelector(".digital_clock"),
      changeClockModeBnt = document.querySelector(".digital_clock_bnt");

const analogHour = document.querySelector(".analog_hour"),
      analogMinute = document.querySelector(".analog_minute"),
      analogSecond = document.querySelector(".analog_second");

let hour24 = false;

function getTime(){
    const date = new Date();

    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    if(!hour24){ //표준모드에서의 시계
        if(hours >= 13){
            digitalClock.innerText = `0${hours - 12} : ${
                minutes  < 10 ? `0${minutes}` : minutes} : ${
                seconds < 10 ? `0${seconds}` : seconds}`;
                changeClockModeBnt.innerHTML = "PM";
        }else if(hours >= 0 && hours < 12){
            if(hours === 0) hours = 12;
            digitalClock.innerText = `${hours} : ${
                minutes  < 10 ? `0${minutes}` : minutes} : ${
                seconds < 10 ? `0${seconds}` : seconds}`;
            changeClockModeBnt.innerHTML = "AM";
        }
    }else{ //24H모드에서의 시계
        digitalClock.innerText = `${hours  < 10 ? `0${hours}` : hours} : ${
            minutes  < 10 ? `0${minutes}` : minutes} : ${
            seconds < 10 ? `0${seconds}` : seconds}`; }
            drawClock(hours, minutes, seconds);
}

const changeClockMode = () => {
    if(hour24){
        hour24 = false;
    }else{
        hour24 = true;
        changeClockModeBnt.innerHTML = "24H";
    }
};

const drawClock = (hours, minutes, seconds) => {
    const hourDegree = (hours + minutes / 60) * (360 / 12) + 90,
      minuteDegree = (minutes + seconds / 60) * (360 / 60) + 90,
      secondDegree = seconds * (360 / 60) + 90;
  
    analogHour.style.transform = `rotate(${hourDegree}deg)`;
    analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
    analogSecond.style.transform = `rotate(${secondDegree}deg)`;
  };
  
function haderInfo() {
    const date = new Date();
    let month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  month = monthList[month];

  header.innerHTML = `Today is <span>${day} ${month}</span>, ${year}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    haderInfo();
    setInterval(haderInfo, 1000);
    changeClockModeBnt.addEventListener("click", changeClockMode);
};

init();