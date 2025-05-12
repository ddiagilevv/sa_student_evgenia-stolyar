/*
// C++
char[] name;
cout << "как тебя зовут?";
cin >> name;
cout << "вас зовут:" << name << endl;

//Python
name = input("как тебя зовут?");

// JavaScript

*/

// вариант 2.
// https://www.npmjs.com/package/prompt-sync
// npm install prompt-sync
// https://www.npmjs.com/
const prompt = require('prompt-sync')();
const name = prompt('как тебя зовут? ');
console.log(`Привет, ${name}`);


// вариант 1.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("как тебя зовут? ", function(name){
    console.log(`Привет, ${name}`);
    rl.close();
});
