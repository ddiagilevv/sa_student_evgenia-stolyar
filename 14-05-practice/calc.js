//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN

try{
const prompt = require('prompt-sync')();


function calculate(a, b, operator){

    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)){
        return 'ошибка! введите 2 числа';
    }
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'ошибка! деление на ноль';
            return a / b;
        case '%':
            if (b === 0) return 'ошибка! остаток от деления на ноль';
            return a % b;
        default: 
            return 'ошибка! неизвестный оператор';
    }
}

console.log(calculate(5, 6, '+'));

const value1 = prompt('введите первое число ');
const operator = prompt('оператор ');
const value2 = prompt('введите второе число ');

let result = calculate(value1, value2, operator);
console.log(`результат: ${result}`);

} catch(error){
        console.error("Ошибка!", error.message);
        console.log(`ссылка на другой калькулятор: link`);
}

console.log(`2025`);
