
const TODOS_KEY = "todo";
const todos = [];
const submitBtn = document.querySelector(".todoWrite button");
const toDoForm = document.querySelector(".todoWrite");

submitBtn.addEventListener("click", addList);

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function sayHello(item) {
    console.log("this is turn of",item);
}

// 배열추가 함수
function addList() {
    let inputv = document.querySelector(".todoWrite input").value;
    if(inputv != null) {
        todos.push(inputv);
        document.querySelector(".todoWrite input").value = "";
        document.querySelector(".todoWrite input").focus();
        saveToDos();
    }
    createList();
}

const saveTodo = localStorage.getItem(TODOS_KEY);

if(saveTodo !== null) {
    const parsedTodos = JSON.parse(saveTodo);
    parsedTodos.forEach(sayHello);
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

