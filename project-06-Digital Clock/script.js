const hour = document.getElementById("hour");
const minit = document.getElementById("minit")
const secend = document.getElementById("secend")



setInterval(()=>{
    let realtime = new Date();

        let realHour = realtime.getHours();
        let realMinits = realtime.getMinutes();
        let realSecond = realtime.getSeconds();

hour.textContent = realHour - 12;
minit.textContent = realMinits;
secend.textContent = realSecond;

},100)