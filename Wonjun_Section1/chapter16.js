//1.상수 객체
const animal={
    type:"고양이",
    name:"나비",
    age:3,
    color:"하얀색"
};

animal.name=2;//속성 값 추가
animal.age=4;//속성 값 수정
animal.name="구름;"//속성 값 수정
delete animal.color;//속성 삭제
//animal={};//에러 발생 상수 객체 재할당 불가
//하지만 animal 객체 속성 조작은 가능
// console.log(animal);

//2.메서드
//-> 값이 함수인 속성을 메서드라고 한다

const person=
{
    name:"정원준",
    sayHI()//메서드 선언, 객체 동작
    {
        console.log("안녕!");
    }

}
person.sayHi();//메서드 호출
peson["sayHi"]();