const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentNode;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function lineThrough(event) {
    const item = event.target.parentElement;
    const check = JSON.parse(localStorage.getItem(TODOS_KEY));
    const checkId = check.find(({id}) => id == parseInt(item.id));

    if (checkId.check === 1) {
        item.style.textDecorationLine = "";
        item.style.color = "";
        event.target.style.color = "";
        checkId.check = 0;
    } else {
        item.style.textDecorationLine = "line-through";
        item.style.color = "gray";
        event.target.style.color = "gray";
        checkId.check = 1;
    }
    toDos = check;
    saveToDos();
}

function paintToDo(newTodo) {
    const ul = document.createElement("ul");
    ul.id = newTodo.id;
    const liItem = document.createElement("li");
    liItem.classList.add("item");
    const liDelete = document.createElement("li");
    liDelete.classList.add("delete");
    liItem.innerText = newTodo.text;
    liDelete.innerHTML = `<i id="edit" class="far fa-trash-alt"></i>`;
    const iDelete = liDelete.querySelector("#edit")

    ul.appendChild(liItem);
    ul.appendChild(liDelete);
    toDoList.appendChild(ul);
    if (newTodo.check === 1) {
        ul.style.textDecorationLine = "line-through";
        ul.style.color = "gray";
        liItem.style.color = "gray";
    }
    iDelete.addEventListener("click", deleteToDo);
    liItem.addEventListener("click", lineThrough);
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
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSummit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

