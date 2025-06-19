
// объектный литерал dog_1
// свойства (dc): кличка, возраст, порода, ...

let dog_1 = {
    name: "Шарик",
    age:4,
    color: "Белый",
    behaviour: "Агрессивный",
    tail: "Короткий",

    info: function() {
        console.log(this);
    },
    speak: function() {
        if (this.behaviour === "Агрессивный") {
            console.log("Собака по имени " + this.name + "ГАВ!");
        } else {
            console.log("Собака по имени " + this.name + "тяв");
        }     
    },
    action: function() {
        if (this.age >= 3) {
            console.log("Собака по имени " + this.name + "бежит");
        } else {
            console.log("Собака по имени " + this.name + "крадется");
        }
    }
}

// функция-конструктор

function Cat(name, age, color){
    this._name = name;
    this._age = age;
    this._color = color;

    this.info = function() {
        console.log(this);
    };

    this.speak = function() {
        console.log("Кот по имени " + this._name + "Meow!");
    };

    this.action = function() {
        console.log("Кот по имени " + this._name + "крадется");
    };
}

let cat_1 = new Cat("Барсик", 7, "рыжий"); // new - ключевое слово, используется для создания объектов. new автоматически связывает this с новым объектом
console.log(cat_1._name, cat_1._age) //Барсик 7
let cat_2 = new Cat("Мурзик", 3, "черный");
console.log(cat_2._name) //Мурзик

function Borsh(expiryDate = '01-11-2027', isVegan = true, kitchen = "ukranian", color = "red"){
    this._expiryDate = expiryDate;
    this._isVegan = isVegan;
    this._kitchen = kitchen;
    this._color = color;

    this.info = function() {
        console.log(this);
    };
}

let borsh_1 = new Borsh();
let borsh_2 = new Borsh('03-08-2035', false, "russian", "pink");
borsh_1.info();
borsh_2.info();





// класс

//function Egg(shape, expiryDate, , )