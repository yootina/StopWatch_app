let minutes = 0;
let seconds = 0;
let millis = 0;
const appendTens = document.getElementById("millis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt__reset");
let intervalId;

buttonStart.onclick = function(){
    clearInterval(intervalId)
    intervalId = setInterval(operateTimer, 10)
}

buttonStop.onclick = function(){
    clearInterval(intervalId)
}

buttonReset.onclick = function(){
    clearInterval(intervalId)
    minutes = 0; seconds = 0; millis = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
}

function operateTimer(){
    millis++;
    appendTens.textContent = millis > 9 ? millis : '0' + millis
    if(millis > 99){
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        millis = 0
        appendTens.textContent = "00"
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        seconds = 0
        appendSeconds.textContent = "00"
    }
}