
// 사용자 입력데이터에 따른 검색결과 출력
const searchForm = document.querySelector("#search-form");
const serachInput = document.querySelector("#search-form input");

function searchSubmit(e) {
    event.preventDefault();
    // GET방식 도달페이지 연결  
    const link = `https://www.google.com/search?q=${serachInput.value}`;
    // location.href = link; - 현재페이지에서 열기
    // window.open(주소) - 새창에서 열기
    window.open(link);

    // 사용자 입력값이 있거나 공백포함인 경우 입력창 초기화
    setTimeout(()=>{
        if(serachInput.value !== null) {
            serachInput.value = "";
            serachInput.focus();
        }
    },100)
}

searchForm.addEventListener("submit", searchSubmit);