let Hours = document.querySelector(".hours");
let Minutes = document.querySelector(".minutes");
let Seconds = document.querySelector(".seconds");

let hours = Number(Hours.innerHTML);
let minutes = Number(Minutes.innerHTML);
let seconds = Number(Seconds.innerHTML);

let hoursIntervel = null;
let minutesIntervel = null;
let secondsIntervel = null;

function secondsIncrement(){
    seconds += 1;
    let sec = seconds % 60;
    let secstring = sec.toString();
    secstring.length < 2 ? Seconds.innerHTML = "0"+secstring : Seconds.innerHTML = secstring;
}
function minutesIncrement(){
    minutes += 1;
    let min = minutes % 60;
    let minstring = min.toString();
    minstring.length < 2 ? Minutes.innerHTML = "0"+minstring : Minutes.innerHTML = minstring;
}
function hoursIncrement(){
    hours += 1;
    let hou = hours % 24;
    let houstring = hou.toString();
    houstring.length < 2 ? Hours.innerHTML = "0"+houstring : Hours.innerHTML = houstring;
}
const button = document.querySelector('.start');
document.addEventListener("DOMContentLoaded", (event) => {
    button.addEventListener("click", () =>{
        hoursIntervel = setInterval(hoursIncrement, 3600000)
        minutesIntervel = setInterval(minutesIncrement, 60000);
        secondsIntervel = setInterval(secondsIncrement, 1000);
        button.disabled = true;
    })
})
// function start(){
//     hoursIntervel = setInterval(hoursIncrement, 3600000)
//     minutesIntervel = setInterval(minutesIncrement, 60000);
//     secondsIntervel = setInterval(secondsIncrement, 1000);
// }
function stop(){
    clearInterval(hoursIntervel);
    clearInterval(minutesIntervel);
    clearInterval(secondsIntervel);
    button.disabled = false;
}
function reset(){
    clearInterval(hoursIntervel);
    clearInterval(minutesIntervel);
    clearInterval(secondsIntervel);
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    button.disabled = false;
}