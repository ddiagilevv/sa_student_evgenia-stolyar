// логическое "И" - &&
//логическое "ИЛИ" - ||

const day1 = 6
const day2 = 30

if (!(day1 >= 1 && day1 <= 31 && day2 >= 1 && day2 <= 31 && day2 > day1)) {
    throw new Error("ошибка! неверная дата");
}  else {
    
}

function getRandomRounded() {
    const num = Math.random() * 100;
    const rounded = Math.round(num * 1000) / 1000;
    return rounded;
}

function createArray(day1, day2) {
    const array = [];
    for (let i = day1; i <= day2; i++) {
       // array.push(`day = ${i} price = ${getRandomRounded()}`);
       array.push(getRandomRounded());
    }
    
    console.log(array);
    return array;
}

createArray(day1, day2);
