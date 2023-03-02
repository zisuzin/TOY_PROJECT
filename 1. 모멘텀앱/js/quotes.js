const quote = [
{
    quote: "해보지 않고는 당신이 무엇을 해낼 수 있는지 알 수 없다.",
    author: "프랭클린 아담",
},
{
    quote: "하늘을 날고 싶은 충동을 느낄 때, 결코 땅을 기라는데 동의할 수 없다.",
    author: "헬렌켈러",
},
{
    quote: "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
    author: "헤로도토스",
},
{
    quote: "아무런 위험없이 승리하는 것은 영광 없는 승리일 뿐이다.",
    author: "피에르 코르네유",
},
{
    quote: "인생이 끝날까 두려워하지 마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.",
    author: "그레이스 한센",
},
{
    quote: "공포를 느껴라, 그리고 그래도 도전하라.",
    author: "수잔 제퍼스",
},
{
    quote: "만약 내가 자신감을 잃게 된다면, 온 세상이 나의 적이 될 것이다.",
    author: "랄프 왈도 에머슨",
},
{
    quote: "자신의 능력을 믿어야 합니다. 그리고 끝까지 밀고 나갈 만큼 충분히 강해야 합니다.",
    author: "로잘린 카터",
},
{
    quote: "행복은 깊이 느끼고, 단순하게 즐기고, 자유롭게 생각하고, 삶에 도전하고, 남에게 필요한 사람이 되는 능력에서 나온다.",
    author: "스톰 제임슨",
},
{
    quote: "내 생각에 인생에서 가장 커다란 위험요인 중의 하나는 위험을 감수하려고 하지 않는다는 점이다.",
    author: "오프라 윈프리",
},

];

const quotes = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quote[10 - 1]);

const todayQuote = quote[Math.floor(Math.random()*quote.length)];

quotes.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
