//5가지 요소 순회 및 탐색 메서드
//1.forEach
//모든 요소 순회하면서, 각각 요소에 특정 동작 수행시키는 메서드
let arr1=[1,2,3];
arr1.forEach(function(item,idx,arr){
    // console.log(idx,item*2);
});

let doubledArr=[];
arr1.forEach((item)=>
{
    doubledArr.push(item*2);
})
// console.log(doubledArr);

//2.탐색 includes
//배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2=[1,2,3];
let isInclude=arr2.includes(10);
// console.log(isInclude);

//3.indexOf
//특정 요소 인덱스(위치) 찾아 반환 메서드
let arr3=[1,2,3];
let arr4=[2,2,2];
let index=arr3.indexOf(2);//2는 어디 인덱스에 있나요
let index1=arr4.indexOf(2);
let index2=arr4.indexOf(20);
// console.log(index);
// console.log(index1);
// console.log(index2);
let objectArr=
[{
    name:"정원준"
},{
    name:"김진수"
},];
console.log(
objectArr.indexOf({name:"정원준"})
);

//4.findIndex
//특정 요소 인덱스(위치) 반환 메서드
//모든 요소 순회하면서, 콜백함수 만족하는 그런 특정 요소 반환 메서드
let arr5=[1,2,3];
const findedIndex=arr5.findIndex((item)=> item%2!==0);//콜백함수 참

console.log(findedIndex);
console.log(
objectArr.findIndex((item)=>item.name==="정원준"));

//5.find
//모든 요소 순회하며 콜백 요소 만족 요소 찾는데, 요소 자체 반환
let arr6=[
    {
        name:"정원준"
    },
    {
        name:"김진야"
    },
];
const finded=arr6.find((item)=>item.name==="정원준");


