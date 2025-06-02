class Dog{
    constructor(name, age, color,type,isAgressive,isLoud){
        this._name = name;
        this._age = age;
        this._color = color;
        this.type = type;
        this.isAgressive = isAgressive;
        this.isLoud = isLoud;

    }

    speak(){
        if (this.isLoud) {
            console.log("ГАВ");
        } else {
            console.log("тяв");
        }        
    }
}
let dog_1 = new Dog("Барсик", 7, "рыжий", "дворяняга", true, true);
let dog_2 = new Dog("Мурзик", 7, "белый", "хаски", false, false);

dog_1.speak();
dog_2.speak();