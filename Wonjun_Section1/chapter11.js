//함수 선언



let area1=getArea(12,20);//함수 호출 함수에 전달한 걸 인수라 한다
console.log(area1);
let area2=getArea(20,30);
console.log(area2);
getArea(30,20);//동적 사용



function getArea(width,  height)//매개변수라 한다
{
    function another()//중첩 함수
    {
        console.log("another");
    }
    another();
    let area=width*height;
    return area;//반환값(결과값)
    //return 만나면 바로 끝
}
//자바스크립트는 호이스팅(끌어올리다) 개념이 있어서
// 함수 선언문 어디에 선언해도 호출 가능