// function task()
// {
//     setTimeout(()=>
//     {
//         console.log("안녕하세요!");
//     },3000)
// }
// // task();
// function add(a,b,callback)
// {
//     setTimeout(()=>
//     {
//         const sum=a+b;//3
//        callback(sum);
//     },3000);
// }
// // add(1,2);
// add(1,2,(value)=>{
//     console.log(value);
// });

//음식 주문 상황
function orderFood(callback)
{
    setTimeout(()=>
    {
        const food="치킨";
        callback(food);
    },3000);
}
function cooldownFood(food,callback)
{
    setTimeout(()=>
    {
         const cooldownedFood=`${food} 식은 음식`;
         callback(cooldownedFood);
    },2000);
}
function freezeFood(food,callback)
{
    setTimeout(()=>{
        const frozenFood=`냉동된 ${food}`;
        callback(frozenFood);
    },1500);
}
orderFood((food)=>
{
    console.log(food);

     cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood,(frozenFood)=>{
            console.log(frozenFood);
        });
    });
});//콜백지옥 
/*
치킨 주문 → 3초 기다림

치킨이 식음(cooldown) → 2초 기다림

식은 치킨을 냉동 → 1.5초 기다림

최종 결과 출력
orderFood
   ↓ (3초 뒤)
cooldownFood
   ↓ (2초 뒤)
freezeFood
   ↓ (1.5초 뒤)
최종 출력
*/