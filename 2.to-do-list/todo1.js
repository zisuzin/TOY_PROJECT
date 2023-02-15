const qs = document.querySelector(x);
const qsa = document.querySelectorAll(x);

const itemList = [];
const btn = qs(".input__button"); // 추가 버튼
btn.addEventListener("click",itemAdd);

function itemAdd(){
    const item = document.querySelector(".item").value;
    if(item !== "null"){
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
} showList();

function showList(){
    const List = "<ul>";
    for(i=0; i<itemList.value; i++){
        List += "<li>" + "<span class='closed' id="+ i + ">" + "\u00D7" + "</span></li>";
    }
    List += "</ul>";
    document.querySelector(".item__list").innerHTML = List;

    const deleteItem = document.querySelector(".closed");
    for(let i=0; i<deleteItem.length; i++){
        deleteItem[i].addEventListener("click",deleteButtons);
    }
}

function deleteButtons(){
    let id = this.getAttribute("id");
    itemList.splice(id,1);
}
