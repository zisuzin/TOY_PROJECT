
// 달력객체 생성
// 최종 날짜객체
let myd = new Date();
// 변경할 날짜객체
let newd = new Date();

// console.log("1.기본출력:",myd);
// 세계공통포멧 출력 : toISOString()
// console.log("2.출력포멧변경:",myd.toISOString());

// 전달 끝날짜
// new Date(년도,월,0-끝날짜/1-첫날짜)
myd = new Date(2023,3,0);
// console.log("3.전달끝날짜:",myd);

myd = new Date(newd.getFullYear(),newd.getMonth(),0);
// console.log("4.전달 끝날짜:",myd);
// 전달정보를 넣을때 getMonth() 정보를 조회하면
// 현재달 숫자보다 1작은수가 나옴
// 숫자로된 현재달은 getMonth()+1 -> 이렇게 사용

// 전달끝날짜 요일
myd = myd.getDay();
// console.log("5.전달끝날짜 요일:",myd);

// 현재달 첫날짜
// 마지막 옵션이 1일경우 날짜정보 숫자로 전달로 해야
// 다음달 첫날짜가 나옴!
myd = new Date(newd.getFullYear(),newd.getMonth(),1);
// console.log("6.현재첫날짜:",myd);

// 현재달 끝날짜
myd = new Date(newd.getFullYear(),newd.getMonth()+1,0);
// console.log("7.현재달 끝날짜:",myd);

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

    // console.log(dates);

    // 달력 초기화구성 함수
    const initFn = () => {
        // 1. 전달 마지막 날짜(옵션:0) -> 달력 전달끝쪽 날짜표시
        const prevLast = new Date(curr_date.getFullYear(),curr_date.getMonth(),0);
        // console.log(prevLast);

        // 2. 현재달 첫째 날짜(옵션:1-> 전달로 셋팅)
        // -> 달력 전달셋팅을 위한 요일 구하기 위함 
        const thisFirst = new Date(curr_date.getFullYear(),curr_date.getMonth(),1);
        // console.log(thisFirst);

        // 3. 현재달 마지막 날짜(옵션:0-> 전달로 셋팅)
        // -> 달력 전달셋팅을 위한 요일 구하기 위함 
        const thisLast = new Date(curr_date.getFullYear(),curr_date.getMonth()+1,0);
        // console.log(thisLast);

        // 4. 년도 표시하기
        yearTit.innerHTML = curr_date.getFullYear();
        function getMonthShortName(monthNo) {
            const date = new Date();
            return date.toLocaleString('en-US',{month: 'long'})
        }
        // console.log(getMonthShortName(4));
        // 5. 월 표시하기 - 월 번호를 영문 월로 변환
        monthTit.innerHTML = getMonthShortName(curr_date.getMonth());

        // 6. 날짜 넣을 배열변수 생성
        const dset = [];

        // 7. 전달 날짜 앞쪽 채우기 
        // 조건 : 현재달 첫날짜 요일이 0이 아니면 내용있음
        if(thisFirst.getDay() !== 0) {
            // console.log(thisFirst.getDay())
            for(let i=0; i<thisFirst.getDay(); i++) {
                // console.log(i)
                // 전달 마지막 날짜부터 -> prevLast.getDate()
                dset.unshift(prevLast.getDate()-i)
                // 마지막날짜 - i증가변수 = 1씩 작아지는 숫자 추가됨
                // unshift() 배열 앞에 값을 추가하는 메서드
            }
        } // if 

        // 2. 현재월 삽입하기
        // 반복문 구성 : 현재월 1일부터 마지막날짜까지 반복 배열추가
        // 현재월 마지막날짜 : thisLast.getDate()
        for(let i=1; i<=thisLast.getDate(); i++) {
            dset.push(i)

        } // for 

        // 3. 다음달 나머지 칸 삽입하기
        // 반복구성 : 1부터 2주 분량 정도 
        for(let i=1; i<14; i++) {
            dset.push(i);
        } // for

        // 화면에 뿌릴 html변수
        let hcode = "";
        
        // 4. 날짜만큼 배열정보로 셋팅하기 
        // 7일 * 6주 = 42개
        for(let i=0; i<42; i++) {
            
        }
        // console.log(dset);
    };

    initFn();
} 

makeCalendar();