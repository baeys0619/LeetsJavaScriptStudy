//6가지 요소 조작 메서드

//1. Push 메서드
//배열 맨 뒤 새로운 요소 추가 메소드
let arr=[1,2,3];
const newLength =arr.push(4,5,6,7);
// console.log(arr);
// console.log(newLength);

//2. Pop
//배열 맨 뒤 요소 제거, 반환
let arr2=[1,2,3];
const popppedItem=arr2.pop();
// console.log(popppedItem);
// console.log(arr2);

//3.Shift
//배열 맨 앞 요소 제거 , 반환

let arr3=[1,2,3];
const shiftedItem= arr3.shift();
// console.log(shiftedItem,arr3);

//4.Unshift
//배열 맨 앞 새로운 요소 추가 메서드
let arr4=[1,2,3];
const newLength2=arr4.unshift(0);
// console.log(newLength,arr4);

//shift unshift는 느리다 push pop에 비해

//5.slice
//마치 가위처럼 , 배열의 특정 범위를 잘라내 새로운 배열 반환

let arr5=[1,2,3,4,5];
let sliced=arr5.slice(2,5);//+1=>2번 인덱스부터 4번 인덱스를 원하지만 5까지 하는 이유는 4까지 필요해 넉넉 자른다 생각하자
let sliced2=arr5.slice(2);//마지막까지 할거면 두번째 인수는 필요 x
let sliced3=arr5.slice(-3)//뒤에서부터 세 개 자름
// console.log(sliced);
// console.log(arr5);
// console.log(sliced2);
// console.log(sliced3)

//6.Concat
//두 개 서로 다른 배열 이어 붙여 새로운 배열 반환
let arr6=[1,2,3];
let arr7=[4,5,6];

let concatedArr=arr6.concat(arr7);
console.log(concatedArr);