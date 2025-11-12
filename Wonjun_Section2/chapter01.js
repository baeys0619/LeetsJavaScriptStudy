//1. Falsy한 값 조건문에서 거짓
let f1=undefined;
let f2=null;
let f3=0;
let f4=-0;
let f5=NaN;
let f6="";
let f7=0n; //big integer 아주 큰 숫자

/*if (!f4)
{
    console.log("falsy");
}
    */

//2. Truthy한 값 조건문에서 참
//-> 7가지 Falsy 한 값들 제외 모두 참
let t1="hello";
let t2=123;
let t3=[];
let t4={};//객체
let t5 =()=> {}; //함수
/*
if (t5)
{
    console.log("truthy");
}
    */
//3.활용 사례

function printName(user){
if(!user){
    console.log("perosn의 값이 없음");
    return;

}
    console.log(user.name);
}
//let user={name:"wonjun"};
let user={name:"wonjun"};
printName(user);
