const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); /* getHours -> number이므로 padStart/padEnd 사용 x */
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/* 타이머함수
-> 첫번째 argument는 실행할 함수명
-> 두번째 argument는 함수를 호출할 시간간격 */
getClock(); /* 1초 대기후 실행되지 않도록 인터벌함수 전에 함수 즉시 호출 */
setInterval(getClock,1000);