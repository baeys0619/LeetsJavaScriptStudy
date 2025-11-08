//1.null 병합 연산자 (??)
//-> 존제하는 값을 추려내는 기능
//-> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2=10;
let var3=20;
let var4=var1??var2;//var1은 undefined이므로 var2값 10 할당;
console.log(var4); //10출력
let var5=var1??var3;//var1은 undefined이므로 var3값 20 할당;
console.log(var5); //20출력
let var6=var2??var3;//먼저 var2가 나오므로 var6은 var2할당
console.log(var6); //var2가 10으로 존재하므로 10출력

let userName="정원준";
let userNickName="jwj0620";
let displayName=userName??userNickName; //userName이 존재하므로 userName할당
console.log(displayName); //"정원준"출력

//2.typeof 연산자
//->값의 타입을 문자열로 반환하는 기능 하는 연산자

let var7=1;
var7=true//변수 타입 고정 x
let t1=typeof var7;

//3.삼항 연산자
//-> 항 3개 사용 연산자;
//조건식 ? 참일때 값 : 거짓일때 값
let var8=10;
//요구사항 :변수 res에 var8의 값이 짝수=>"짝", 홀수=>"홀" 대입
let res=var8%2===0 ? "짝":"홀";
console.log(res); //"짝"출력
