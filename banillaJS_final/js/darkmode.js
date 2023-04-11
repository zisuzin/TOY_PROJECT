
const darkbtn = document.querySelector("#dark_mode_btn");
const whitebtn = document.querySelector(".on");
const container = document.querySelector("#container");
const contbox = document.querySelector(".cont");

darkbtn.addEventListener("click",() => {
  // console.log("클릭");
  container.style.backgroundColor = "#000";
  contbox.style.boxShadow = "none";
  darkbtn.classList.toggle("on");
}); 

// whitebtn.addEventListener("click",() => {
//   // container.style.backgroundColor = "#fff";
//   // darkbtn.style.width = "136px";
// });
