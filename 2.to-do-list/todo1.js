
"use-strict";

let itList = [];
const btn = document.querySelector(".input__button");
btn.addEventListener("click",itemAdd);

function itemAdd(){
    let item = document.querySelector(".item").value;
    if(item !== null){
        itList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
    listAdd();
} 

function listAdd(){
    let list = "<ul>";
    for(let i=0; i<itList.length; i++){
        list += "<li>" + itList[i] + "<span class='close' id=i" + ">" + "\u2717" + "</span></li>";
    }
    list += "</ul>"
    document.querySelector(".item__list").innerHTML = list;

    let close = document.querySelectorAll(".close");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click",deleteButtons);
    }
}   

function deleteButtons(){
    let id = this.getAttribute("id");
    itemList.splice(id,1);
}   listAdd();

const checkList = document.querySelector(".item__list");
checkList.addEventListener("click",event=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
});


// 타이핑 효과 적용
let content = "To do list"; 
let tit = document.querySelector(".main__title h1");
let idx = 0;

function typ(){
    tit.innerHTML += content[idx++];
    if(idx>content.length){
        tit.innerHTML = "";
        idx = 0;
    }
} 
setInterval(typ,200);
