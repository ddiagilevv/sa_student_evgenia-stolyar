//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN

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