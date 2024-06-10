let [miliseconds,seconds,minutes] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    miliseconds++;
    if(miliseconds == 100){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" +  minutes : minutes;
    let s = seconds < 10 ? "0" +  seconds : seconds;
    let ms = miliseconds < 10 ? "0" +  miliseconds : miliseconds;



    displayTime.innerHTML = m +":"+ s +":"+ ms;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [miliseconds,seconds,minutes] = [0,0,0];
    displayTime.innerHTML = "00:00:00"
}