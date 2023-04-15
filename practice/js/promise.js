
/******************************************************************** 
    1. state
    - 프로세스가 무거운 operation을 수행하는 중인지,
        기능 수행이 완료되서 성공 or 실패했는지 상태에 대해 이해
        (1) pending
        promise 객체가 만들어져서 지정한 operation이 수행중일 때
        (2) fulfilled 
        operation 수행을 완료했을 때
        (3) rejected
        파일을 찾을 수 없거나 or 네트워크에 문제가 생겼을 때

********************************************************************/

// 1. Producer
// Promise 객체는 executer라는 콜백함수를 전달해줘야함
// 위 콜백함수는 기능을 정상적으로 수행해서 최종 데이터를 전달받는 resolve, 
// 중간에 문제가 생겼을 때 호출할 reject 콜백함수 2가지를 전달해줘야함
const promise = new Promise((resolve, reject) => {
    console.log('doing something');
    setTimeout(()=>{
        resolve('완료!');
        // reject(new Error('no network'))
    },2000);
    // Promise 만든 순간 전달한 executer 콜백함수가 바로 실행됨
});

promise.then((value)=>{
    console.log(value);
})
.catch(error => {
    console.log(error);
})
// 성공 or 실패 여부 상관없이 어떤 기능을 마지막에 수행하고 싶을 때 사용
.finally(()=>{
    console.log('finally')
});

// Promise Chaining
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num => num *2) // 2
.then(num => num *3) // 6
.then(num => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(num -1),1000); // 5
    })
})
.then(num => console.log(num));

// Error Handling
const getHen = () => 
    new Promise((resolve,reject)=> {
        setTimeout(()=> resolve(`🐔`),1000);
});
const getEgg = hen => 
    new Promise((resolve,reject)=> {
        setTimeout(()=> reject(new Error(`error! ${hen}=>🥚`),1000));
});
const cook = egg => 
    new Promise((resolve,reject)=> {
        setTimeout(()=> resolve(`${egg}=>🍳`),1000);
});

getHen()
    .then(getEgg)
    .catch(error => {
        return `😊`;
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);