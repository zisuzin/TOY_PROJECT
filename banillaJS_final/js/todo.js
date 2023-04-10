
const TODOS_KEY = "todos";
const todos = [];
const submitBtn = document.querySelector(".todoWrite button");
const toDoForm = document.querySelector(".todoWrite");

// 로컬스토리지에 입력값 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

submitBtn.addEventListener("click", addList);

// 배열추가 함수
function addList() {
    let inputv = document.querySelector(".todoWrite input").value;
    if(inputv != null) {
        todos.push(inputv);
        document.querySelector(".todoWrite input").value = "";
        document.querySelector(".todoWrite input").focus();
    }
    createList();
}

// 리스트생성 함수
function createList() {
    let hcode = "<ul>"
    for(let i=0; i<todos.length; i++) {
        hcode += "<li>" + todos[i] + "<span class='close' id="+ i +">" + "<i class='fa-regular fa-trash-can'>" + "\u00D7" + "</i></span></li>";
    }
    hcode += "</ul>";
    document.querySelector(".Todo_List").innerHTML = hcode;

    let deletebtn = document.querySelectorAll(".close");
    for(let i=0; i<deletebtn.length; i++) {
        deletebtn[i].addEventListener("click",deleteList);
    }
}

// 리스트삭제 함수
function deleteList() {
    let id = this.getAttribute("id");
    todos.splice(id,1);
    createList();
    saveToDos();
}

let checktodo = document.querySelector(".Todo_List");
checktodo.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    }
});

// 로컬스토리지에 저장한 입력데이터 불러오기
toDoForm.addEventListener("submit", handleToDoSummit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function handleToDoSummit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        check: 0
    }
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
