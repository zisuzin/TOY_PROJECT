
const darkbtn = document.querySelector("#dark_mode_btn");
const whitebtn = document.querySelector(".on");
const container = document.querySelector("#container");
const contbox = document.querySelector(".cont");

darkbtn.addEventListener("click",() => {
  // console.log("클릭");
  container.classList.toggle("on");
  contbox.classList.toggle("on");
  darkbtn.classList.toggle("on");
}); 
