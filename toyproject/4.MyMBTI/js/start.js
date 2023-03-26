const main = document.querySelector("#main");
const qna = document.querySelector("#qna_container");

function addAnswer (answerText) {
    const answer = document.querySelector(".anserBox");
    const createButton = document.createElement("button");
    answer.appendChild(createButton);
    answer.innerHTML = answerText;
}

function goNext (qIndex) {
    const qBox = document.querySelector(".qnaBox");
    qBox.innerHTML = qnaList[qIndex].q;
    for(let i in qnaList[qIndex].a){
        addAnswer(qnaList[qIndex].a[i].answer);
    }
}

function begin () {
    main.style.animation = "fadeOut 1s"

    setTimeout(() => {
        qna.style.animation = "fadeIn 1s"

        setTimeout(() => {
            main.style.display="none";
            qna.style.display="block";
        },450); // main display:none 타이머함수()

        /* goNext 함수호출 */
        let qIndex = 0;
        goNext(qIndex);


    },450); // qna fadeIn 타이머함수() 
} // begin 함수() - main fadeOut ani