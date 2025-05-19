//qwertyqwertyqwerty
//qwertyqwertyqwerty
// qwertyqwertyqwerty
// qwertyqwertyqwerty

const prompt = require('prompt-sync')();

const m = parseInt(prompt("введите количество строк "));
const n = parseInt(prompt("Введите количество паттернов в строке "));
const pattern = prompt("введите паттерн ");

row = "";
let i = 0; 
while (i < n){  
    row += pattern; // аналагично row = row + pattern
    i++;
}
console.log(row);
 