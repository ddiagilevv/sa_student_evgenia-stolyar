// логическое "И" - &&
//логическое "ИЛИ" - ||

const day1 = 4
const day2 = 19

if (!(day1 >= 1 && day1 <= 31 && day2 >= 1 && day2 <= 31 && day2 > day1)) {
    throw new Error("ошибка! неверная дата");
}  else {
    
}

const num = Math.random() * 100;
const rounded = Math.round(num * 1000) / 1000; // 3 знака после запятой
console.log(rounded);

function 