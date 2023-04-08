
const form = document.querySelector(".todoWrite");
const formInput = form.querySelector("input");
const todoList = document.querySelector(".Todo_List ul");

const arr = [];

    function userWrite(e){
        e.preventDefault();
        let newTodo = formInput.value;
        formInput.value = "";
        // console.log(newTodo,formInput.value);
        arr.push(newTodo);
        paintToDo(newTodo);
    }
    
    form.addEventListener("submit",userWrite);
    
    function paintToDo(newTodo){
        const li = document.createElement("li");
        const span = document.createElement("span");

        todoList.appendChild(li);
        li.appendChild(span);
        span.innerText = newTodo;

    }

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
    