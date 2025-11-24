//1.배열의 구조 분해 할당
let arr=[1,2,3];

// let one=arr[0];
// let two=arr[1];
// let three=arr[2];

let[one,two,three,four=4]=arr;
//arr배열이 알아서 변수에 할당됨
// console.log(one,two,three,four);


//2. 객체의 구조 분해 할당
let person={
    name:"정원준",
    age:24,
    major:"software",
};
let {
    name,
    age: myAge,
    major,
    extra="hello"

}=person;
//중괄호 활용
// console.log(name,myAge,major,extra);

//3. 객체 구조 분해 할당 이용해 함수 매개변수 받기

const func=({name,age,major,extra})=>{
    console.log(name,age,major,extra);
}
func(person)//객체 넘김
