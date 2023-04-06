let click = true;

function overClick(){
    if(click) {
        console.log("클릭됨!")
        click = !click; 
        setTimeout(()=>{
            click = true;
        },2000);
    } 
    else {
        console.log("중복됨!")
    }

}