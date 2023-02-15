// const qs = (x) => document.querySelector(x);
// const qsa = (x) => document.querySelectorAll(x);


const form = document.querySelector("form"); // 폼 제출버튼 & 폼 작성후 엔터 누른 경우의 폼 이벤트 가져오기 
const input = document.querySelector("input"); // 사용자가 입력한 텍스트데이터 가져오기
const ul = document.querySelector("ul"); // 사용자가 작성한 할일리스트를 가져다가 리스트 아이템으로 추가하기


// 1. 삭제 버튼을 추가 
// 2. 입력한 리스트데이터가 저장되게끔
// 3. 삭제 버튼 -> 저장된 데이터 업데이트  

// 전체 아이템들 저장할 배열 생성
let todos = []; 

// 리스트 요소 생성될 때마다 로컬스토리지에 데이터 업데이트
const save = () => {
    localStorage.setItem("todos",JSON.stringify(todos)); // todos라는 키값을 가진 배열화 작업
} // JSON.stringify -> 자바스크립트 객체를 제이슨 문자열로 변경
 
// -> 형식:
// id: 1,
// text: "hello"
// 새로운 요소들을 하나의 객체들로 만들어서 배열공간에 저장해줘야 함

const delItem = (event) => {
    const target = event.target.parentElement;
    // console.log(target,id);
    // console.log(event.target.parentElement);
    // console.log(target.id);
    todos =  todos.filter(todo => todo.id !== target.id) // todo id가 삭제하려는 target id와 같지 않는 요소만 필터링 
    target.remove();
};

const addItem = (todo) => {
    if(todo.text !== ""){ // 입력값이 공백이 아닐 경우만 다음을 실행 
        const li = document.createElement("li");
        const btn = document.createElement("button");
        const span = document.createElement("span");

        span.innerText = todo.text;
        btn.innerText = "삭제";
        btn.addEventListener("click",delItem);

        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li); //화면에 출력되려면 문서 구성 요소에 붙여줘야하므로 ul태그의 자식요소로 넣어줌

        // input요소 안에 작성후 제출한 내용은 자동으로 지워지게 설정
        // text = "";
    }
}


const handler = (event) => {
    event.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value,
    };

    todos.push(todo);
    addItem(todo); // addItem이라는 함수 호출하여 input.value(입력값데이터)값을 넘겨줌
    save();

    input.value = "";
}

form.addEventListener("submit", handler); // 새로고침 제어하기 위해 event객체가 가지고 있는 프로퍼티 사용 
// console.log(input.value); // 사용자가 입력한 값 가져오기 

// 새로고침하면 날아가버리는 데이터.. 이를 브라우저상 기록에 남길 수 있도록 로컬스토리지에 저장!
// 브라우저상에 저장할 수 있는 웹스토리지 
// -> 종류 : 로컬 스토리지, 세션 스토리지
// localStorage.setItem(key, 저장데이터);
localStorage.setItem("hello","world");

const init = () => {
    const userTodos =  localStorage.getItem("todos");
    // console.log(userTodos);
    
    if(userTodos){
        userTodos.forEach((todo)=>{
            addItem(todo);
        });
    
    }
    todos = userTodos;
}

console.log(window.localStorage);

