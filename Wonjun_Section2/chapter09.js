//5가지 배열 변형 메서드
//1.filter
//기존 배열에서 조건 만족 요소 필터링해 새로운 배열 반환
let arr1=[
    
       { name:"정원준",hobby:"테니스"},
       { name:"정호준",hobby:"테니스" },
       { name:"정일호",hobby:"독서"},
];

const tennisPeople=arr1.filter((item)=>
{
    if(item.hobby==="테니스")
        return true;
})
console.log(tennisPeople);

//이것도 가능
const tennisPeople2=arr1.filter(
    (item)=>item.hobby==="테니스"
);

//2.map
//배열의 모든 요소 순회하면서,각각 콜백함수 실행해
//그 결과값 모아 새로운 배열 반환
let arr2=[1,2,3];
const mapResult=arr2.map((item,idx,arr)=>{
return item*2;
})
// console.log(mapResult);

let names=arr1.map((item)=>item.name);
// console.log(names);

//3.sort
//배열을 '사전순'으로 정렬하는 메서드
let arr3=["a","f","e"];//문자열 정렬,숫자 대소는 안 됨 
let arr4=[10,3,5];
/* 오름차순
arr4.sort((a,b)=>
{
    if(a>b)
    {
        //b가 a앞으로 와라
        return 1;//양수 리턴 하면 작은 게 앞으로 감
    }//b,a배치
    else if(a<b)
    {
        //a가 b앞으로 와라
        return -1;
        //a, b배치
    }
    
        else{
            //두 값 자리 바꾸지 마라
            return 0;
            //a,b 자리 그대로 유지
        }
    
});
*/
arr4.sort((a,b)=>
{
    if(a>b)
    {
        //a가 b앞으로 와라
        return -1;//양수 리턴 하면 작은 게 앞으로 감
    }//b,a배치
    else if(a<b)
    {
        //b가 a앞으로 와라
        return 1;
        //a, b배치
    }
    
        else{
            //두 값 자리 바꾸지 마라
            return 0;
            //a,b 자리 그대로 유지
        }
    
});

arr3.sort();
// 
//4.toSorted(가장 최근 추가 신상 함수)
//정렬된 새로운 배여 반환 메서드
let arr5=["c","a","b"];
const sorted=arr5.toSorted();
console.log(arr5);
console.log(sorted);
//5.join
//배열의 모든 요소를 하나의 문자열로 합쳐 반환 메서드
let arr6=["winter","is","cold"];
const joined =arr6.join("-");
console.log(joined);
