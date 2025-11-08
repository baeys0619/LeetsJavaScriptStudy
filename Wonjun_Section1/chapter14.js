//스코프 Scope
//-> 전역(전체 영역) 스코프/지역(함수) 스코프
//-> 전역 스코프: 코드 전체 영역에서 변수를 참조 가능
//-> 지역 스코프: 함수 내부에서 변수를 참조 가능
//-> 지역 스코프 내부에서 전역 스코프 변수 참조 가능
//-> 전역 스코프 내부에서 지역 스코프 변수 참조 불가능

let a=1;//전역 스코프

function funcA()
{
    let b=2;//지역 스코프
    console.log(a);//전역 스코프 변수 참조 가능

    function funcB()
    {
        let e=5;
        console.log(a);//전역 스코프 변수 참조 가능
        console.log(b);//지역 스코프 변수 참조 가능
    }
}

funcA();
// console.log(b);지역 스코프 변수 참조 불가능

if (ture)
{
    let c=3;//지역 스코프 조건문도 지역 스코프 블록 만듬
}

console.log(c);//참조 불가능

for(let i=0;i<3;i++)
{
   let d=1;
}
console.log(d);//참조 불가능 반복문도 안됨

 funcB();//funcB 함수 호출 불가능