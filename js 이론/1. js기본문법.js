// 변수를 이용한 사칙연산 & 변수 정의
const a = 5;
const b = 2;
const myName = "sujin"; // 카멜케이스 변수명 정의방식
// const my_name = "sujin"; // 스네이크케이스 변수명 정의방식

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a % 2);
// console.log("hello " + myName);

// myName = "su22in"; // 값의 재할당
// console.log("your name is " + myName);

// array 배열 - 변수 값을 배열화
const mon = "MOND";
const tue = "TUE";
const wen = "WEN";
const thu = "THU";

//const week = [mon,tue,wen,thu];

// week변수에 할당된 모든 배열값을 출력!
// console.log(week);

// week변수에 할당된 특정 배열값만 출력!
// console.log(week[2]);

// 배열의 마지막에 값 추가
// week.push("fri");
// console.log(week);

const player = {
    name: "sujin",
    points: 100,
    fat: true,
};

// console.log(player);

// 객체 안에 속성 추가하기
// player.lastName = "mini";

// 객체 내부 특정 값만 출력 혹은 업데이트
// console.log(player.name);
player.points = 3;
// console.log(player);

// 함수 fuction 명령 실행 
// function은 어떤 코드를 캡슐화해서 여러 번 실행할 수 있도록 해줌
function sayHello(name){ // function(매개변수){코드} -> 매개변수 안에 들어간 데이터를 받는다
    console.log("Hello! my name is " + name);
}

// sayHello("sujin"); // 함수명(인수) -> 해당 인수 데이터를 보낸다
// sayHello("juwon");
// sayHello("hyeri");

// return문 -> return키워드는 함수 내에서만 사용 가능!
// plus, minus함수를 player2변수에 할당
const player2 = {
    name: "sujin",
    points: 100,
    plus: function (a,b) {
        console.log(a + b); 
    },
    minus: function (a,b) {
        return a - b;
    },
};

// player2.plus(3 , 5);
// player2.minus(3 , 5);
// console.log(player2);
// console.log(player2.plus(3,5));

// console.log(player2.plus(7,3)); // 10
// console.log(player2.minus(7,3)); // 4
// const plusResult = player2.plus(7,3);
// const plusResult = player2.plus(7,3); // console.log 명령시 결과는 10 
// const minusResult = player2.minus(7,3); // console.log 명령시 결과는 10 
// console.log(plusResult); // 결과는 10 (7 + 3)
// console.log(minusResult); // 결과는 4 (7 - 3)
// const sum = plusResult + minusResult; // 결과는 14(10 + 4)
// console.log(sum); 
// console.log("다음 결과값의 총합은 " + sum + " 입니다.")

// 조건문 if
// const age = prompt("how old are you?");
// console.log(typeof "ㅎㅇ", typeof parseInt("ee"));
// console.log("15" !== 15);
// console.log(parseInt(age)); //변수 값을 정수화 하겠다 -> 정수(x): NaN 표시

// const age = prompt("how old are you?"); // 문자를 숫자화


//if(isNaN(age)){ // 조건이 숫자일 경우(true일 경우) 반환 
//    console.log("숫자다!")
//} else { // 조건이 문자일 경우(false일 경우) 반환
//    console.log("문자다!")
//};



// 이벤트 처리 - 1. 이벤트리스너 사용
// title.addEventListener("click",function(){
    // console.log("title was clicked!"); 
// });
const title = document.querySelector(".title");

// 이벤트 처리 - 2. oneventname 사용
/*  title.onmouseover = function(){
    console.log("event was hovered!")}; */



 function mouseOver(){
    console.log("event was executed");
}

// 오버시 이벤트 로깅
title.addEventListener("mouseover",mouseOver);


/* title.removeEventListener("mouseover",mouseOver); */