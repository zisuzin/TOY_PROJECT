
/* 공통 함수 */
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const test = (x) => console.log(x);

/* 이벤트 대상 */
const colorPallet = qs("#pallet");
const body = qs("body");
var beforeColor; 

/* DOM 로드되었을때 bgChange 함수 실행 */
window.onload = function(){
    bgChange();
}

function bgChange(){
    const pallet = [
    ["#b71c1c", "#c62828", "#d32f2f", "#e53935", "#f44336", "#ef5350", "#e57373", "#ef9a9a", "#ffcdd2", "#ffebee"],
    ["#880e4f", "#ad1457", "#c2185b", "#d81b60", "#e91e63", "#ec407a", "#f06292","#f48fb1", "#f8bbd0", "#fce4ec"],
    ["#4a148c", "#6a1b9a", "#7b1fa2", "#8e24aa", "#9c27b0", "#ab47bc", "#ba68c8", "#ce93d8", "#e1bee7", "#f3e5f5"],
    ["#311b92", "#4527a0", "#512da8", "#5e35b1", "#673ab7", "#7e57c2", "#9575cd","#b39ddb", "#d1c4e9", "#ede7f6"],
    ["#01579b", "#0277bd", "#0288d1", "#039be5", "#03a9f4", "#29b6f6", "#4fc3f7", "#81d4fa", "#b3e5fc", "#e1f5fe"],
    ["#006064","#00838f", "#0097a7", "#00acc1", "#00bcd4", "#26c6da", "#4dd0e1", "#80deea", "#b2ebf2", "#e0f7fa"]
    ];
    
    var createColor = "";
    for(i=0; i<pallet.length; i++){
      for(j=0; j<pallet[i].length; j++){
        createColor += "<div id="+pallet[i][j]+" class='colorBox' onclick='colorSet(this)'></div>";
      }
    }
    /* 파레트 파싱 */
    colorPallet.innerHTML = createColor;
  
    /* 요소에 색상 적용 */
    var colorBox = document.getElementsByClassName("colorBox");
    for(i=0; i<colorBox.length; i++){
      colorBox[i].style.background = colorBox[i].id;
    } // for문()
  } // bgChange 함수()
  
    /* 요소 클릭시 배경색 변경 */
    function colorSet(target){
    body.style.background = target.id;
  
    /* 요소 클릭시 보더색 작용 */
    if(beforeColor != undefined || beforeColor != null){
      /* 중복 선택된 요소 클래스 제거 */
      document.getElementById(beforeColor).className = document.getElementById(beforeColor).className.replace("active", "");
    } // if문()
    /* 현재 선택된 요소만 클래스 추가 */
    document.getElementById(target.id).classList.add("active");
    beforeColor = target.id;
  } // colorSet 함수()

