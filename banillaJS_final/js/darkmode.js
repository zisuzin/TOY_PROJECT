
const darkbtn = document.querySelector("#dark_mode_btn");
const container = document.querySelector("#container");
const contbox = document.querySelector(".cont");

darkbtn.addEventListener("click",() => {
  // console.log("클릭");
  container.style.backgroundColor = "#000";
  contbox.style.boxShadow = "none";
  darkbtn.style.width = "144px";
  darkbtn.style.backgroundPosition = "-714px 0px";
  // background-position: -714px 0px;
}); 
