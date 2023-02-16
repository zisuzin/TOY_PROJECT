
// ** 구현 기능 **
// 1. 입력창에 할 일을 입력하고 ➕버튼을 누르면 리스트에 할 일을 표시
// 2. 할 일 오른쪽에 있는 ✖️버튼을 누르면 리스트에서 할 일 삭제하기
// 3. 리스트에 표시된 할 일을 클릭하면 ✔️버튼이 왼쪽에 나타나면서 할 일에 줄 긋기

'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);


// 배열추가 함수
function addItem() {
    let item = document.querySelector(".item").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
    showList();
}

// 리스트생성 함수
function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        // 유니코드 참고 : https://www.htmlsymbols.xyz/ 
        // 유니코드란 -> 유니크한 코드의 준말. 모든 문자에 특정 번호를 매겨서 사용함
        //  -> 전 세계 모든 문자를 수용할 수 있는 산업 표준을 설계한 것 
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".item__list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }

}

// 리스트삭제 함수
function deleteItem() {
    // getAttribute : 선택한 요소의 속성값을 가져옴
    // -> 요소의 속성에 접근하는 방법 2가지 :
    // .getAttribute(속성 방식) vs .속성명(프로퍼티 방식)
    // .getAttribute 속성방식 경우 내가 지정한 속성값을 가져옴
    // .속성명 프로퍼티방식 경우 내가 지정한 속성값이 아닌 요소의 실 속성값을 가져옴 
    let id = this.getAttribute("id");  

    // splice메서드는 아래 2가지 방식으로 사용할 수가 있음!
    // 1. 인자 하나만 쓰는 경우:
    // -> splice(순번) -> 순번부터 뒤 모두 지움
    // 2. 인자 두개 쓰는 경우: 
    // splice(순번,개수) -> 순번부터 몇개 지움  

    // splice vs slice 메서드 비교 
    // splice() 메서드는 원본 배열의 값을 대체
    // slice() 메서드는 원본 배열의 값 유지
    itemList.splice(id, 1); 
    showList();
}


let checkList = document.querySelector('.item__list');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});


// 타이핑 효과 적용
// const content = "To do list";
// const txt = document.querySelector(".main__title > h1");
// let idx = 0;

// function typing(){
//     txt.innerHTML += content[idx++]; 
//     if(idx > content.length){
//         txt.innerHTML = "";
//         idx = 0;
//     }
// } 
// setInterval(typing,200);
// console.log(typing);