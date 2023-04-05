
window.addEventListener("DOMContentLoaded",loadFn);

function loadFn() {
    console.log("로딩완료!");

// 1. 대상선정
// 1-1. 이벤트 대상: .abtn
const abtn = document.querySelectorAll(".abtn");
// console.log(abtn);

// 1-2. 변경대상 : #slide
const slide = document.querySelector("#slide");

// 1-4. 슬라이드 li리스트
let slist = document.querySelectorAll("#slide>li");

// 2. 슬라이드 변경함수 만들기
const goSlide = (seq) => {
    // console.log("슬라이드",seq);


// 슬라이드번호 변수
let snum = 0;
// 슬라이드 개수
let scnt = document.querySelectorAll("#slide>li").length;
console.log("슬라이드개수:",scnt);

    // 1. 방향에 따른 분기
    // 1-1. 오른쪽버튼 클릭시: seq===1일때
    if(seq===1){
        // 슬라이드번호 증가!
        snum++;
        console.log("오른쪽",snum);
    }

    // 1-2. 왼쪽버튼 클릭시: seq===0일때
    else if(seq===0){
        // 슬라이드번호 감소!
        snum--;
        console.log("왼쪽",snum);
        
        // 2. 이동하기
        // 이동대상 : slide변수
        slide.style.left = (snum*-100)+"%";
        slide.style.transition = "left .4s ease-in-out";
    }
    // 2. 한계값 체크 : 처음이전-> 끝
    if(snum===-1) snum = scnt-1;
    // 끝다음-> 처음
    else if(snum === scnt) snum = 0;


}; // goSlide함수 //

// 3. 대상에 이벤트 설정하기
abtn.forEach((ele,idx)=>{
    ele.onclick=(e)=>{goSlide(idx)};
});

} // loadFn 함수()