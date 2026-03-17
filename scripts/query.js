// query.js
//tag: header, nav, ul, li, a
//class: gnb, lnb

//변수 생성 태그5개, 클래스2개
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('.gnb > li');
const li2 = document.querySelectorAll('.gnb > li li');
// const li2 = document.querySelectorAll('.lnb > li');
const gnbA = document.querySelectorAll('.gnb > li > a');//2
const lnbA = document.querySelectorAll('.lnb > li > a');//3
const gnbClsQ = document.querySelector('.gnb');
const lnbClsQ = document.querySelector('.lnb');

//콘솔확인(오류 조기 확인)
console.log(header,nav,ul[0],ul[1],li[1],li2,gnbA,lnbA,gnbClsQ,lnbClsQ,);

//-----------------------------------------함수 기초 활용
// function 함수명(매개변수){반복실행명령어} 함수호출();
// 1. 할인율 계산기
// (100-할인율) / 100
// (100-5) / 100 = 0.95
// 판매가 * 0.95
let disCount = '';

//disCountfunc(30000);
//disCountfunc(10000);
console.log(disCountfunc(30000));
alert(disCountfunc(10000));

function disCountfunc(price){
    disCount = `5% 할인 가격 : ${price * 0.95}원, `;
    disCount += `10% 할인 가격 : ${price * 0.9}원, `;
    disCount += `20% 할인 가격 : ${price * 0.8}원, `;
    disCount += `30% 할인 가격 : ${price * 0.7}원`;
    // console.log(disCount);
    return disCount; //함수 밖으로 disCount 값만 내보낸다.(함수호출할때)
    //함수의 결과값은 다양한 함수로 실행할 수 있어야 하기 때문에 함수 내부에서 실행함수를 정하는 것이 아닌 리턴으로 값만 내보내고 함수밖에서 실행함수를 정한다.
}