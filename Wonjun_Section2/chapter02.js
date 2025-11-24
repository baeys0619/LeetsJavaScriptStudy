// function returnFalse()
// {
//     console.log("False 함수")
//     return undefined;
// }
// function returnTrue()
// {
//     console.log("True 함수");
//     return 10;
// }
// console.log(returnFalse()&&returnTrue());
// //단락 평가:&& 첫번째 피연산자로 연산 확정 가능. 
// //두번째 피연산자 불필요 FALSE&&를 하면 false
// //returnTrue() 호출 x

//단락 평가 활용 사례
function printName(person)
{
    const name=person&&person.name
    console.log(name||"person 값이 없음");
}
printName();//falsy여서 오른쪽 값 반환 
// undefined를 보내면 name=person이 선택(단락평가),console.logdㅔ서는 "peson값이 없음 "truthy
printName({name:"정원준"});//person.name 객체값 인수로 보내면 person.name선택 console.log도 둘 다 truthy
//T||T하면 첫번째 T return  T&&T면 두번째 T리턴

// && → “앞이 거짓이면 뒤를 안 봄”

// || → “앞이 거짓이면 뒤를 봄 (대신값 사용)”
// &&는 “앞이 참이면 뒤를 평가해 반환”

// ||는 “앞이 거짓이면 뒤를 평가해 반환”