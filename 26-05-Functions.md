[Функции. Ч.1](9-05-Functions/functions.md)

# Функции Ч. 2

Функции в js и в большинстве других языков - это блок кода который можно вызывать многократно

Ф-ции позволяют:
- избежать дублирования кода
- логически разделять логику на "кирпичики"
- упрощение чтения и поддержки кода

## объявление функции

1. function declaration
    - function greet() {...}
    имеет имя, "поднимается"(hoisting, можно вызвать до объявления)
2. function expression
    - const greet = function() {...}
    - функция присваивается переменной, не поднимается
    - нельзя вызывать до момента объявления

3. arrow function
    - const greet = () => {...}
    - более короткий синтаксис
    - не поднимается
    - const x = (p) => {...}
     - это объявление функции в стрелочной форме. ВНИМАНИЕ! ОБЪЯВЛЕНИЕ
    ```js
    const имяПеременной = (параметры) => {
        // тело функции
    }
    ```
    ```js
    const add = (a, b) => a + b;
    ```
    
4. named function expression
    - const greet = function greetFunc() {...}
    - как function expression, но внутри у функции есть имя.
    (полезно для рекурсии и дебага)
    ```js
    const factorial = function f(n){
        if (n <= 1) {
            return 1; // код 1 значит ошибка
        } else {
            return n * f(n - 1);
        }
    }
    ```

5. generator functions
6. async functions
7. async generators
