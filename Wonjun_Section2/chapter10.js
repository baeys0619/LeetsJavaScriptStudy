//1. Date 객체 생성법
let date1=new Date();//현재 날짜와 시간 -생성자
console.log(date1);

let date2=new Date(1997,1,7,23,59,59);//특정 날짜와 시간 설정 문자열 및 숫자 모두 가능
console.log(date2);

//2.타임 스탬프
//특정 시간이 '1970년 1월 1일 00:00:00 UTC'로부터 몇 밀리초가 지났는지 나타내는 숫자 utc 기준
let ts1=date1.getTime();
// console.log(ts1);

let date4=new Date(ts1);
console.log(date1,date4);

//3.시간 요소들을 추출하는 방법
let year=date1.getFullYear();
let month=date1.getMonth()+1;//월은 0부터 시작 11월은 10으로 시작 배열 index랑 비슷
let date=date1.getDate();

let hours=date1.getHours();
let minutes=date1.getMinutes();
let seconds=date1.getSeconds(); 
// console.log(year,month,date,hours,minutes,seconds);

//4.시간 수정하는 방법
date1.setFullYear(2023);
date1.setMonth(11);//12월 +1
date1.setDate(25);
date1.setHours(13);
date1.setMinutes(30);
date1.setSeconds(0);
console.log(date1);

//5. 시간을 여러 포맷으로 출력하기 

console.log(date1.toDateString());//날짜만
console.log(date1.toLocaleString());//현지 시간대에 맞게 날짜와 시간 모두

