const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 로컬스토리지에 input값 저장하기 위한 배열 생성
const TODOS_KEY = "todos";
const toDos = [];

// 사용자 입력값 변수에 저장
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    toDoInput.value = ""; 
    toDos.push(newTodo);
    paintToDo(newTodo);

    // localStorage.setItem("todos" , toDos);
    localStorage.setItem("TODOS_KEY" , JSON.stringify(toDos));
    // localStorage.getItem("todos");
    JSON.parse(localStorage.getItem("toDos"));
    
    if(savedToDos !== null) {
        const parseToDos = JSON.parse(savedToDos);
        console.log(parseToDos);
    }

    const savedToDos = localStorage.getItem(TODOS_KEY);


    // console.log("newTodo값:",newTodo,"\ntoDoInput값:",toDoInput.value);
}
    toDoForm.addEventListener("submit",handleToDoSubmit);




function paintToDo(newTodo){
    // console.log("I will paint",newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    // console.log(li);
    toDoList.appendChild(li);
    li.appendChild(span);
    button.innerText= "X";
    li.appendChild(button);
    button.addEventListener("click",deleteToDo);
    // console.log(toDoList);
;}


function deleteToDo(event){
    const li = event.target.parentElement;
    // li.style.textDecoration = "line-through";
    li.remove();
    saveToDos();
}

// 새로고침시 지워지지 않도록 localstorage에 input값 저장!
