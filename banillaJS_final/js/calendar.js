
// 달력객체 생성
// 최종 날짜객체
let myd = new Date();
// 변경할 날짜객체
let newd = new Date();

console.log("1.기본출력:",myd);
// 세계공통포멧 출력 : toISOString()
console.log("2.출력포멧변경:",myd.toISOString());

// 전달 끝날짜
// new Date(년도,월,0-끝날짜/1-첫날짜)
myd = new Date(2023,3,0);
console.log("3.전달끝날짜:",myd);

myd = new Date(newd.getFullYear(),newd.getMonth(),0);
console.log("4.전달 끝날짜:",myd);
// 전달정보를 넣을때 getMonth() 정보를 조회하면
// 현재달 숫자보다 1작은수가 나옴
// 숫자로된 현재달은 getMonth()+1 -> 이렇게 사용

// 전달끝날짜 요일
myd = myd.getDay();
console.log("5.전달끝날짜 요일:",myd);

// 현재달 첫날짜
// 마지막 옵션이 1일경우 날짜정보 숫자로 전달로 해야
// 다음달 첫날짜가 나옴!
myd = new Date(newd.getFullYear(),newd.getMonth(),1);
console.log("6.현재첫날짜:",myd);

// 현재달 끝날짜
myd = new Date(newd.getFullYear(),newd.getMonth()+1,0);
console.log("7.현재달 끝날짜:",myd);

// 달력 생성자함수

function makeCalendar() {
    // (1) 변경할 현재날짜 객체
    const curr_date = new Date();
    // (2) 오늘날짜 객체
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = document.querySelector(".yearTit")
    // (4) 월요소 : .monthTit
    const monthTit = document.querySelector(".monthTit")
    // (5) 날짜요소 : .dates
    const dates = document.querySelector(".dates")

    console.log(dates);

    // 달력 초기화구성 함수
    const initFn = () => {
        const prevLast = new Date(curr_date.getFullYear())
    }
} 

makeCalendar();