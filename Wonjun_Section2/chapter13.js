function add10(num)
{
const promise=new Promise((resolve,reject)=>{
    //비동기 작업 실행하는 함수
    //executor
    
    setTimeout(()=>
    {
    

        if(typeof num==='number')
            resolve(num+10);
        else
            reject("num이 숫자가 아닙니다.");
        // resolve("안녕");//작업 성공 시 호출 
        // reject("왜 실패했는지 이유");//작업 실패 시 호출
    },2000);
});
return promise;
}

add10(0)
.then((result)=>
{
    console.log(result);
    return add10(result);
}).then((result)=>
   {
    console.log(result);

    return add10(undefined);
   }).then((result)=>
   {
    console.log(result);
   }). catch((error)=>
   {
    console.log(error);
   });
   







/*
const promise=new Promise((resolve,reject)=>{
    //비동기 작업 실행하는 함수
    //executor
    
    setTimeout(()=>
    {
        const num=null;

        if(typeof num==='number')
            resolve(num+10);
        else
            reject("num이 숫자가 아닙니다.");
        // resolve("안녕");//작업 성공 시 호출 
        // reject("왜 실패했는지 이유");//작업 실패 시 호출
    },2000);
});

//then 메서드 - 성공했을 때 실행
//그 후에
//promise 체이닝
promise.then((value)=>
{
    console.log(value);
}).catch((error)=>
{
    console.log(error);
});
//catch 메서드 - 실패했을 때 실행
/*
promise.catch((error)=>
{
    console.log(error);
});
*/


function add30(num)
{
    const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
    if(typeof num==='number')
        resolve(num+30);
    else
        reject("num이 숫자가 아닙니다.");
},3000);
    });
    return promise;
}

add30(0)
.then((result)=>
{
    console.log(result);
    return add30(result);

}).then((result)=>
{
    console.log(result);
    return add30(result);
}).catch((error)=>
{
    console.log(error);
});