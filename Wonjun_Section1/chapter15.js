//1.객체 생성
let obj1=new Object();//Object 생성자 함수 사용

let obj2={};//객체 리터럴 사용 대부분 사용

//2.객체 속성(프로퍼티) 추가
let person={
    name:"정원준",//key:value,
    age:23,//key,value, "key에는 따옴표 생략 가능"
    hobby:"야구",//key,value
    job:"Fe개발자",
    extra:{},
    10:20,
    "like cat":true//key에 공백 포함 가능 따음표 팔요
};

//3.1 객체 속성 접근(점 표기법, 괄호 표기법)
let name=person.name;//점 표기법
let age=person["age"];//괄호 표기법 속성 키를 따음표 감싸기

let property ="hobby";//변수에 속성 키 저장
let hobby=person[property];//괄호 표기법 '변수' 사용 가능

//3.2 객체 속성 추가하는 방법

person.job="FE developer";
person["favoriteFood"]="치킨";//새로운 속성 추가

//3.3 객체 속성 수정
person.job="educator";
person["favoriteFood"]="초콜릿";

//3.4 객체 속성 삭제
delete person.job;
delete person["favoriteFood"];

//3.5 객체 속성 유무 확인 방법(in 연산자)
let result1="name" in person;
let result2="cat" in person;
console.log(result1);//true
console.log(result2);//false