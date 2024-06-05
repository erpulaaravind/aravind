let myLabel = document.getElementById('clock');

time();
setInterval(time, 1000);

function time(){
    let date = new Date();
    myLabel.innerHTML = timeFormat(date);

    function timeFormat(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let amOrpm = hours >= 12 ? "pm" : "am"
        hours = (hours % 12) || 12;

        hours = zeroFormate(hours);
        minutes = zeroFormate(minutes);
        seconds = zeroFormate(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }
    function zeroFormate(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}