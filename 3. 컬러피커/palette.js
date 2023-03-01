
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const test = (x) => console.log(x);

const palette = [];

const item_wrap = qsa(".color > span");

for(let item of item_wrap) {

    item.addEventListener("click",()=>{
        item_wrap.forEach(ele=>ele.classList.remove("checked"));
        item.classList.add("checked");
    });

    item.addEventListener("dblclick",()=>{
        item.classList.remove("checked");
    });
}


