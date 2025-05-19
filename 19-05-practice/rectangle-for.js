
const prompt = require('prompt-sync')();

const m = parseInt(prompt("введите количество строк "));
const n = parseInt(prompt("Введите количество паттернов в строке "));
const pattern = prompt("введите паттерн ");

row = "";
 
for (let i = 0; i < n; i++){  
    row += pattern; // аналагично row = row + pattern
}
for (let i = 0; i < m; i++){
    console.log(row);
}