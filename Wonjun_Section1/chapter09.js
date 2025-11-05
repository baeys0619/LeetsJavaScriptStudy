//1.if 조건문(if문)
let num=6;
if(num>=10)
{
    // console.log("10보다 크거나 같습니다.");  
    // console.log("참입니다");
}
else if(num>=5)
{
    // console.log("5보다 크거나 같습니다.");
}
else if(num>3)
{
    // console.log("3보다 크거나 같습니다.");
}

else//그렇지 않으면
{
    // console.log("10보다 작습니다.");//조건이 거짓일 때
}

//2.switch 조건문
//->if문과 기능 자체 동일
//->다수 조건 처리할 때 if보다 직관적
let animal="owl";

switch(animal)
{
    case"cat":
    console.log("고양이입니다.");
    break;
        case "dog":
        console.log("강아지입니다.");
        break;
            case "bear":
            console.log("곰입니다.");
            break;
                case"snake":
                console.log("뱀입니다.");
                break;
                case"lion":
                console.log("사자입니다.");
                break;
   default:
    console.log("동물이 아닙니다."); 
                
}