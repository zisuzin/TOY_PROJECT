
const darkbtn = document.querySelector("#dark_mode_btn");
const container = document.querySelector("#container");
const contbox = document.querySelector(".cont");
const title = document.querySelectorAll(".tit");
const contA = document.querySelectorAll(".contbx");
const dates = document.querySelectorAll(".dates");

darkbtn.addEventListener("click",(e) => {
  container.classList.toggle("on");
  contbox.classList.toggle("on");
  darkbtn.classList.toggle("on");
  eachEle(e);
}); 


function eachEle() {
  title.forEach((ele) => {
    ele.classList.toggle("on");
  });

  contA.forEach((ele) => {
    ele.classList.toggle("on");
  })

  dates.forEach((ele) => {
    ele.classList.toggle("on");
  })
}