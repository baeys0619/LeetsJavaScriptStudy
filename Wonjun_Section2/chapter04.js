//1.Spread 연산자(흩뿌리다,펼치다)
//->객체나 배열 저장된 여러개의 값을 개별로 흩뿌려주는 역할
//배열이나 객체 안의 값을 개별 요소로 펼쳐서 복사하거나 함수 인자에 전달할 때 사용
/*let arr1=[1,2,3];
// let arr2=[4,arr1[0],arr1[1],arr1[2],5,6];//비효율 안전x

let arr2=[4,...arr1,5,6];//spread ...
// console.log(arr2);

let obj1=
{
    a:1,
    b:2,
};
let obj2={
    // a:obj1.a,
    // b:obj1.b,
    ...obj1,
    c:3,
    d:4,
};
// console.log(obj2);

function funcA(p1,p2,p3)
{
console.log(p1,p2,p3);
}
funcA(...arr1);

//2.Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수
function funcB(one,two,...args)
{
console.log(args);
}
funcB(...arr1)
*/
let arr1=[1,2,3];
let arr2=[1,...arr1,4,5,6];
console.log(arr2);

let obj={
    a:1,
    b:2,
}
let obj2={
    ...obj,
    c:3,
    d:4,
};
console.log(obj2);

function funcA(p1,p2,p3)
{
    console.log(p1,p2,p3);
}
funcA(...arr1);

function funcB(one,...args)
{
    console.log(args);
}
funcB(...arr1)