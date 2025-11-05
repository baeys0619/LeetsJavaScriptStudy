for(let idx=0;idx<=10;idx++)
{
    if(idx%2==0)
        continue;//짝수면 아래 코드 실행 안 하고 바로 다음 반복으로 continue
    console.log(idx);
    if(idx>=5)
        break;
}