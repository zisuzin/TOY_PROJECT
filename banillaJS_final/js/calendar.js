
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
        // 현재달은 getMonth()+1
        monthTit.innerHTML = getMonthShortName(curr_date.getMonth()+1);

        // 6. 날짜 넣을 배열변수 생성
        const dset = [];

        // 7. 전달 날짜 앞쪽 채우기 
        // 조건 : 현재달 첫날짜 요일이 0이 아니면 내용있음
        if(thisFirst.getDay() !== 0) {
            // console.log(thisFirst.getDay())
            for(let i=0; i<thisFirst.getDay(); i++) {
                // console.log(i)
                // 전달 마지막 날짜부터 -> prevLast.getDate()
                dset.unshift(`
                <span style="display:none">
                ${prevLast.getDate()-i}
                </span>`);
                // 마지막날짜 - i증가변수 = 1씩 작아지는 숫자 추가됨
                // unshift() 배열 앞에 값을 추가하는 메서드
                // console.log(dset)
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
            dset.push(`
                <span style="display:none">
                ${i}
                </span>
            `);
        } // for

        // 화면에 뿌릴 html변수
        let hcode = "";
        
        // 4. 날짜만큼 배열정보로 셋팅하기 
        // 7일 * 6주 = 42개
        for(let i=0; i<42; i++) {
            if( // 년,월,일이 모두 일치하는 오늘만 표시(클래스 today)
            today.getDate()===dset[i] &&
            today.getMonth()==curr_date.getMonth() &&
            today.getFullYear()==curr_date.getFullYear()){
                hcode += `<div class="date today">${dset[i]}</div>`;
            }
            else {
                hcode += `<div class="date">${dset[i]}</div>`;
            }
        }
        // 5. 코드 화면에 출력
        // 대상 : .dates 
        dates.innerHTML = hcode;

        document.querySelectorAll(".date").forEach(
            (ele) =>
                (ele.onclick = () => {
                    // 년
                    let cyear = yearTit.innerText;
                    // 월
                    let cmonth = monthTit.innerText;
                    // 일
                    let cdate = ele.innerText;

                    // 전달/다음달은 span태그가 있으므로 구분함!
                    let isSpan = ele.querySelector("span");
                    // console.log(isSpan);
                    // 없을 경우 null값이 나옴 -> if문에서 false처리됨!
                    if(isSpan){ // null이 아닐때만 true처리되어 들어감!
                        // span요소의 클래스가 "bm"이면 true
                        let cls = isSpan.classList.contains("bm");
                        console.log(cls);
                        if(cls){ //////// 이전달일 경우 /////
                            // 월에서 1을 뺀다!
                            // Number(문자형숫자) -> 숫자형변환
                            // -,*,/ 연산은 브라우저가 자동변환해준다
                            // 그러나 +연산은 문자 더하기 가능하므로
                            // 이것을 강제 형변환해야 안전하다!
                            cmonth = Number(cmonth) - 1;
                            // console.log("이전달:"+cmonth);

                            // 만약 1월이면 이전달은 0이 아니므로 12로처리
                            if(cmonth===0){ 
                                cmonth = 12;
                                // 년도도 전년도로 1뺌
                                cyear = Number(cyear) - 1;
                            } ///////// if //////////

                        } ///////////// if /////////////
                        else{ ///// 다음달일 경우 ///////
                            // 월에서 1을 더한다!
                            cmonth = Number(cmonth) + 1;
                            // console.log("다음달:"+cmonth);

                            // 만약 12월이면 다음달은 13이 아니므로 1로처리
                            if(cmonth===13){ 
                                cmonth = 1;
                                // 년도도 다음년도로 1더함
                                cyear = Number(cyear) + 1;
                            } ///////// if //////////


                        } /////////// else ////////////

                    } /////////// if //////////////

                    // 최종날짜 데이터
                    let comp = cyear + "-" + addZero(cmonth) + "-" + addZero(cdate);

                    // console.log(comp);
                })
        );
    }; // initFn 함수()

    // 0자릿수 만들기 함수 ////////
    const addZero = (x) => (x < 10 ? "0" + x : x);
    // 보낸숫자가 10보다 작으면 앞에 "0"을 더해서 리턴함!

    initFn(); // 최초호출!

    
    // (2) 이전달력 출력하기 함수
    const prevCal = () => {
        // 이전월로 변경하여 initFn() 함수호출 
        // getMonth() 월가져오기 / setMonth() 월 셋팅하기
        curr_date.setMonth(curr_date.getMonth()-1);
        initFn();
    }; // prevCal 함수()

    // 버튼에 클릭설정하기
    const btnL = document.querySelector(".prev_btn")
    // const btnR = document.querySelector(".next_btn")
    btnL.onclick = prevCal;
    // console.log(btnL)
} 

makeCalendar();