console.log(`Вариант 1:`);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите фрукт, который вы хотите перевести на русский ", function(fruit){
    
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

    rl.close();
});
