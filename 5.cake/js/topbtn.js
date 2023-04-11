const topBtn = document.querySelector(".see_deco_list");
const rotateI = document.querySelector(".see_deco_list > i");
const decoList = document.querySelector(".deco_list");

topBtn.addEventListener("click", () => {
    // console.log("클릭")
    topBtn.classList.toggle("btnWidth");
    rotateI.classList.toggle("btnWidth");
    decoList.classList.toggle("btnHeight");
});