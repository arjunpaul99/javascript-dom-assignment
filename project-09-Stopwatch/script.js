const time = document.querySelector("#time");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let second = 0;
let minute = 0;
let hour = 0;
let timer = null;

function updateTime(){

    second++;
    if(second === 60){
        second = 0;
        minute++;
    }

    if(minute === 60){
        minute = 0;
        hour++;
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    time.textContent = `${h} : ${m} : ${s}`;
}

start.addEventListener("click",()=>{
    if(timer !== null) return;
    timer = setInterval(updateTime,1000);

});

stop.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
    second = 0;
    minute = 0;
    hour = 0;

    time.textContent = "00 : 00 : 00";

});