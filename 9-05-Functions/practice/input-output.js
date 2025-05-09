//пример1
function sayHello(){
    console.log("Привет");
}
sayHello();


console.log("-------------");

//пример2
function greet(name){    
    console.log("Привет, " + name);
}
// "Привет, " + name - конкатенация строк
// "Привет,", name - тоже конкатенация строк, но ставится пробел
greet("Женя");

console.log("-------------");

function add(a, b){
    return a + b;
}

let result = add(5,8);

console.log(result);

// Функция - именованный блок кода, который мы можем вызвать и выполнить
// Ф-ия может (но не обяз. принимать параметры и возвращать результат)
// Ф-ции делают код чище, структурированнее. (см. DRY priciple)