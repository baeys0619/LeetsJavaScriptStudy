//1. 콜백함수 나중에 실행

function main(value) {
//   console.log(1);
//   console.log(20);
  value();
//   console.log("end");
}

main(() => {
//   console.log("i am sub");
});
//함수를 인수로 전달 가능, 콜백 함수

//2.콜백 함수 예제

function repeat(count,callback){
for(let idx=0;idx<=count;idx++)
{
    callback(idx);
}
}
repeat(5,function(idx)
{
    console.log(idx);
});

repeat(5,function(idx)
{
    console.log(idx*2);
})
repeat(5,(idx)=>
{
    console.log(idx*3);
});


/*function repeatDouble(count){//중복코드
for(let idx=0;idx<=count;idx++)
{
    console.log(idx*2);
}
}

repeatDouble(5);
*/

//callback 추가 공부
function main(callback) {
  console.log("1. main 함수 시작");
  callback(); // 콜백 함수 실행
  console.log("3. main 함수 끝");
}

function sub() {
  console.log("2. sub 함수 실행");
}

main(sub);
//콜백함수 : 나중에 실행되는 함수
function repeat(count,callback){
    for(let i=0;i<count;i++)
    {
        callback(i);
    }
}
    repeat(3, function (n) {
  console.log(n); 
});

repeat(3, function (n) {
  console.log(n * 2); // 0, 2, 4, 6
});


function cook(food,callback)
{
    console.log(`${food} 요리 중...`);
    callback();
}
function eat()
{
    console.log("맛있게 먹기")
}
cook("라면",eat);



console.log("1.준비 중..");
setTimeout(function()

{
    console.log("2.3초 후 실행");

},3000)
console.log("3.다른 작업")