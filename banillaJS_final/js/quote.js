
const quotes = [
{
    quote: "Life is either a daring \n adventure or nothing at all.",
    author: "– Helen Keller",
},
{
    quote: "Only I can change me life, \n no one can do it for me.",
    author: "– Carol Burnett",
},
{
    quote: "You will face many defeats in life, \n but never let yourself be defeated.",
    author: "– Maya Angelou",
},
{
    quote: "In the end, it's not the years. \n It's the life in your years",
    author: "– Abraham Lincoln",
},
{
    quote: "This too shall pass.",
    author: "– Et hoc transibit",
    
},
{
    quote: "The die is cast.",
    author: "– Julius caesar",
},
];


const imgs = ["img1","img2","img3","img4","img5","img6"];
const chosenImg = imgs[Math.floor(Math.random()*imgs.length)];

// TODAY QUOTE 배경이미지 변경
function quoteRan() {
    /* bg 이미지 영역 */
    const quoteBg = document.querySelector(".img_cover");
    /* quote 텍스트 영역 */
    const quote = document.querySelector(".quoteText p:first-child");
    const author = document.querySelector(".quoteText p:last-child");

    const today_quote = quotes[Math.floor(Math.random()*quotes.length)];

    quote.innerText = today_quote.quote;
    author.innerHTML = today_quote.author;
    const createImg = document.createElement('img');
    createImg.src = `./image/${chosenImg}.jpg`;
    quoteBg.appendChild(createImg);   
}

quoteRan();