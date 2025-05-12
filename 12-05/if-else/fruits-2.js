console.log(`Вариант 2:`);

const prompt = require('prompt-sync')();

const fruit = prompt('Введите фрукт, который вы хотите перевести на русский ');

switch(fruit){
    case "apple":
        console.log("Яблоко");
      break;
    case "banana":
        console.log("банан");
      break;
    case "orange":
        console.log("апельсин");
      break;
    default:
        console.log("не знаю такой фрукт");
}
