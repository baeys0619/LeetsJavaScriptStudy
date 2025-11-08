//1. 묵시적 형변환
//-> 자바스크립트 엔진이 알아서 형 변환함
let num=10;
let str="20";

const result1=num+str; //문자열 연결 연산 수행 "1020"num이 str으로 변환

//2. 명시적 형변환
//-> 개발자가 내장함수를 이용해 직접 형 변환 수행
let str1="15";
let strToNum=Number(str1);

let str2="10개";
let strToNum2=parseInt(str2);
console.log(strToNum2); //10출력  

//숫자->문자열

let num1=20;
let numToStr=String(num1);
console.log(numToStr+"입니다"); //"20"출력 문자열이어서 20 입니다 출력(이어서)