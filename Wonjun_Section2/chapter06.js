
//1.배열 순회
let arr=[1,2,3];

//1.1배열 인덱스
 for(let i=0;i<arr.length;i++)//배열의 길이만큼
 {
    // console.log(arr[i]);
 }
 

 let arr2=[4,5,6,7,8];
 for(let i=0;i<arr2.length;i++)
 {
    // console.log(arr2[i]);
 }

 //1.2 for of 반복문(오직 배열 순회)only 배열

 for(let item of arr)//arr을 하나씩 item에다가 집어넣음
 {
    // console.log(item);
 }
 
 //2. 객체 순회

 let person={
    name:"정원준",
    age:24,
    major:"software",
 };

 //2.1 Object.keys 사용
 //-> 객체에서 key 값만 뽑아 새로운 배열 반환

 let keys=Object.keys(person);
//  console.log(keys);
/*
for(let i=0;i<keys.length;i++)
{
    console.log(keys[i]);
}
*/

for(let key of keys)
{
    const value=person[key];
    // console.log(key,person[key]);
    // console.log(key,value);
}

//2.2 Object Values

//->객체에서 value값만 뽑아 새로운 배열로 반환

let values=Object.values(person);
// console.log(values);

for(let value of values)
{
    // console.log(value);
}

//2.3 for in (for of 와 비슷) only 객체

for(let key in person)
{
    const value=person[key];
    console.log(key,value);
}
