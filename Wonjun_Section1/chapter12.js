//1. 함수 표현식 호이스팅 안됨
function funcA()
{
    // console.log("funcA");;


}

let varA=funcA;//함수를 변수에 할당
console.log(varA);
varA();//호출

let varB=function ()//익명 함수. 함수 선언이 아님
{
    // console.log("funcB");
}
varB();

//2.화살표 함수
//->function 키워드 대신 => 사용
let varC =(value)=>{
    console.log(value);
    return value+1//
}
console.log(varC(10));



