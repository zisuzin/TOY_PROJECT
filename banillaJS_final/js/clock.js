const clock = document.querySelector(".digital");
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

// 디지털시계 
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); /* getHours -> number이므로 padStart/padEnd 사용 x */
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 아날로그시계 
function getAnalogClock() {
    const today = new Date();
    // const hh = today.getHours() * 30;
    const hh = today.getHours();
    console.log(hh)
    const mm = today.getMinutes() * deg;
    const ss = today.getSeconds() * deg;

    hr.style.transform = `rotate(${hh + mm / 12}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
}

/* 1초 대기후 실행되지 않도록 인터벌함수 실행 전 즉시 호출 */
getAnalogClock();
getClock(); 
setInterval (getAnalogClock, 1000);
setInterval(getClock,1000);