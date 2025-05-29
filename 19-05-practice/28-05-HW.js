const prompt = require('prompt-sync')();

const factorial = function f(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * f(n - 1);
    }
};

const n = prompt('введите число, которое хотите возвести в факториал ');

let result = factorial(n);
console.log(`результат: ${result}`);