// Абстрактный класс - Организм(Все живое)
class Organism {
    constructor(name){
        // new.target - специальное свойство, показывающее, какой класс создан через new
        // если кто-то не создал подкласс на основе Organism, а вместо этого написал new Organism(...) - выбрасываем ошибку
        if (new.target === Organism) {
            throw new Eroor("Нельзя создавать экземпляр абстрактного класса Organism")
        }

        this.name = name;
    }

    // обычный метод
    // Общее поведение для всего живого - метаболизм
    metabolize(){
        console.log(`${this.name} осуществляет метаболизм`);
    }

    // абстрактный метод
    // каждое живое существо размножается. но по-разному. 
    // в подклассах мы ОБЯЗАНЫ переопределить этот метод
    reproduce(){
        throw new Eroor("метод reproduce() должен быть реализован в подклассе");
    }

}



// класс Animal наследует абстрактный класс Organism
class Animal extends Organism {
    constructor(name){
        // вызываем конструктор класса Organism (поднявшись наверх по цепочке наследования)
        super(name);
    }

    // общая способность животных - двигаться
    // можем переопределить (?)
    move() {
        console.log(`${this.name} передвигается`);
    }

    // Обязательная реализация(переопределение) абстрактного метода reproduce()
    reproduce(){
        console.log(`${this.name} размножается половым ИЛИ ... ИЛИ ... путями`);
    }

    // можем переопределить (?)
    makeSound() {
        console.log(`${this.name} издаёт звук`);
    }
}

// класс Plant наследует абстрактный класс Organism
class Plant extends Organism {
    constructor(name){
        // вызываем конструктор класса Organism (поднявшись наверх по цепочке наследования)
        super(name);
    }

    photosythesize(){
        console.log(`растение ${this.name} мутит фотосинтез`);
    }

    // Обязательная реализация(переопределение) абстрактного метода reproduce()
    reproduce(){
        console.log(`Растения размножаются с помощью семян, почкавания, ... etc...`);
    }
}



// класс Cat наследует класс Animal(который, в свою очередь, наследует абстрактный класс Organism)
class Cat extends Animal{
    constructor(name){
        // вызываем конструктор класса Animal (поднявшись наверх по цепочке наследования)
        super(name);
    }

    // переопределяем метод makeSound()
    makeSound() {
        console.log(`${this.name} говорит МЯУ`);
    }

    scratch(){
        console.log(`${this.name} царапается`);
    }
    
}

// класс Dog наследует класс Animal(который, в свою очередь, наследует абстрактный класс Organism)
class Dog extends Animal{
    constructor(name){
        // вызываем конструктор класса Animal (поднявшись наверх по цепочке наследования)
        super(name);
    }

    makeSound() {
        console.log(`${this.name} говорит ГАВ`);
    }

    bite(){
        console.log(`${this.name} делает КУСЬ`);
    }
}



class Rose extends Plant {
    constructor(name){
        // вызываем конструктор класса Plant (поднявшись наверх по цепочке наследования)
        super(name);
    }

    // можно, но не обязательно!!!!!!!! переопределить метод reproduce
    // reproduce - абстрактный метод абстрактного класса Организм, при этом reproduce переопределен в классе Растения
    // но в классе Роза мы можем(но никто нас не заставляет) еще раз его переопределить чтобы уточнить вид размножения
    reproduce(){
        console.log(`${this.name} размножается черенками или семенами`);
    }

    bloom(){
        console.log(`${this.name} распускается 🌹`);
    }
}

/* 
ИЕРАРХИЯ НАСЛЕДОВАНИЯ:

Organism (абстрактный)
    Animal
        Cat
        Dog
    Plant
        Rose
*/

const murka = new Cat("кот Мурка");
const rex   = new Dog("пёс Рекс");
const rose  = new Rose("Роза в соду у садовода")

// ----- ОБЩИЕ МЕТОДЫ ----- 
murka.metabolize();
rex.metabolize();
rose.metabolize();

// ----- УНИКАЛЬНОЕ ПОВЕДЕНИЕ ----- 
murka.makeSound();
murka.scratch();

rex.makeSound();
rex.bite();

rose.photosythesize();
rose.bloom();

// ----- РАЗМНОЖЕНИЕ ----- 
murka.reproduce();
rex.reproduce();
rose.reproduce();

// ----- проверка: НЕЛЬЗЯ создать абстрактный класс
try {
    const inopreshelenec = new Organism("пришелец"); // ОШИБКА
} catch (e) {
    console.log("Ошибка: ", e.message);
    console.log("НЕЛЬЗЯ создавать абстрактный класс")
}
