//콜백 지옥
orderFood((food) => {
    cooldownFood(food, (cooldownedFood) => {
        freezeFood(cooldownedFood, (frozenFood) => {
            console.log(frozenFood);
        });
    });
});
//promise
function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("치킨"), 3000);
    });
}

function cooldownFood(food) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${food} 식은 음식`), 2000);
    });
}

function freezeFood(food) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`냉동된 ${food}`), 1500);
    });
}
//async/await
async function processFood() {
    const food = await orderFood();
    console.log(food);

    const cooled = await cooldownFood(food);
    console.log(cooled);

    const frozen = await freezeFood(cooled);
    console.log(frozen);
}

processFood();
