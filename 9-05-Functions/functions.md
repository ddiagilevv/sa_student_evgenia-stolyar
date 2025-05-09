DRY - don`t repeat yourself
https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself


функция сходитьВМагазин(){
    1) одеться
    2) закрыть квартиру
    3) вызвать такси
...

}

// ниже в комментария к коду используется метасинтаксис. к js 
// отношения не имеет.
// https://en.wikipedia.org/wiki/Metasyntax
//[] - опциональные параметры, переменные, etc...
//{} - обязательные


```js
function sayHello(){    
    console.log("Привет");
}

sayHello();
```

function sayHello([параметры]) -
sayHello - имя функции
в скобках могут быть а могут не быть 1 и более параметров

Функции с параметрами:

```js
function sayHello(name){    
    console.log("Привет, ", name);
}
// "Привет, ", name - конкатенация строк

sayHello("Женя");
sayHello("Аня");
sayHello("Вася");

```

```js
function add(a, b){
    let c = a + b;
    return c;
}


```