
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


// TODAY QUOTE 배경이미지 변경
const imgs = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"];
const bg = document.querySelector(".quote_bg");
const changeImg = imgs[Math.floor(Math.random()*imgs.length)];

// console.log(imgs);

// bg.style.background = url(`../image/${changeImg}`);

// const bgImg = document.querySelector("img");
// bgImg.src = `image/${changeImg}`;

//bg.style.backgroundImage = bgImg;

//bg.appendChild(bgImg);

window.onload = function() {
    const quoteBg = document.querySelector(".quote_bg");
    const quote = document.querySelector(".quoteText p:first-child");
    const author = document.querySelector(".quoteText p:last-child");


    const today_quote = quotes[Math.floor(Math.random()*quotes.length)];
    // quoteBg.addEventListener('click', changeText);

    // function changeText(){
        console.log(today_quote);
        quote.innerText = today_quote.quote;
        author.innerText = today_quote.author;
    // }
};