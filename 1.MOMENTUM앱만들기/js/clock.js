const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello!");
}

/* 타이머함수
-> 첫번째 argument는 실행할 함수명
-> 두번째 argument는 함수를 호출할 시간간격 */

setInterval(sayHello,5000);