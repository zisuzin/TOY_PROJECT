
const todos = [];
const submitBtn = document.querySelector(".todoWrite button");
// console.log(submitBtn)

submitBtn.addEventListener("click", addList);

// 배열추가 함수
function addList() {
    let inputv = document.querySelector(".todoWrite input").value;
    if(inputv != null) {
        todos.push(inputv);
        console.log(todos)
        document.querySelector(".todoWrite input").value = "";
        document.querySelector(".todoWrite input").focus();
    }
    createList();
}

// 리스트생성 함수
function createList() {
    let hcode = "<ul>"
    for(let i=0; i<todos.length; i++) {
        hcode += "<div class='itemwrap'>"
        hcode += "<li>" + todos[i] + "</li>";
        hcode += "<li class='close' id="+ i +">" + "\u00D7" + "</li>";
        hcode += "</div>"
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
}

let checktodo = document.querySelector(".Todo_List");
checktodo.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    }
});