
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const test = (x) => console.log(x);

const palette = [["#b71c1c", "#c62828", "#d32f2f", "#e53935", "#f44336", "#ef5350", "#e57373", "#ef9a9a", "#ffcdd2", "#ffebee"],
["#880e4f", "#ad1457", "#c2185b", "#d81b60", "#e91e63", "#ec407a", "#f06292","#f48fb1", "#f8bbd0", "#fce4ec"],
["#4a148c", "#6a1b9a", "#7b1fa2", "#8e24aa", "#9c27b0", "#ab47bc", "#ba68c8", "#ce93d8", "#e1bee7", "#f3e5f5"],
["#311b92", "#4527a0", "#512da8", "#5e35b1", "#673ab7", "#7e57c2", "#9575cd","#b39ddb", "#d1c4e9", "#ede7f6"],
["#01579b", "#0277bd", "#0288d1", "#039be5", "#03a9f4", "#29b6f6", "#4fc3f7", "#81d4fa", "#b3e5fc", "#e1f5fe"],
["#006064","#00838f", "#0097a7", "#00acc1", "#00bcd4", "#26c6da", "#4dd0e1", "#80deea", "#b2ebf2", "#e0f7fa"]];


const item_wrap = qsa(".color > span");
const colorList = palette[Math.floor(Math.random()*palette.length)]; 


for(let item of item_wrap) {

    item.addEventListener("click",()=>{
        item_wrap.forEach(ele=>ele.classList.remove("checked"));
        item.classList.add("checked");
        document.body.style.backgroundColor = `${colorList}`;
    });
    
    item.addEventListener("dblclick",()=>{
        item.classList.remove("checked");
        document.body.style.backgroundColor = "transparent";
    });

    // item.addEventListener("click",()=>{
    //     document.body.style.background = 

    // });
} /// for of /// 

