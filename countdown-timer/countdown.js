//countdown javascript part
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const rakshaBandhan = "22 Aug 2021";

function countdown() {
    const rakshaBandhanDate = new Date(rakshaBandhan)
    const currentDate = new Date();
       
    const totalSeconds =  (rakshaBandhanDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;  
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML  =  doformatTime(hours);
    minutesEl.innerHTML = doformatTime(minutes);
    secondsEl.innerHTML = doformatTime(seconds);


    // console.log(rakshaBandhanDate - currentDate);
    console.log(days, hours, minutes, seconds);     
}

//format the time to zero when seconds remaining using function
function doformatTime (time) {
    // return time < 10 ? `0${time}` : time;
        if (time < 10 ) {
         (`0${time}`)
        } else {
          time;
        }
  return time;
}

//call/invoke the function here
countdown();

setInterval(countdown, 1000);