const Animal = require("./Animal");

class Cat extends Animal {
    constructor(weight, name, breed, calm) {
        super();
        this.legs = 4;
        this.tail = true;
        this.type = "cat";
        this.sound = "meow";
        this.weight = weight;
        this.name = name;
        this.breed = breed;
        this.calm = calm;
    }
    beNice() {
        if (this.calm === true) {
            console.log(`This cat is calm. You can pet it.`);
        } else {
            console.log(`This cat is not calm. Back away slowly.`);
        }
    }
    weighCat() {
        console.log(`This fish weighs ${this.weight} pounds.`)
    }
}

const missy = new Cat(3, "Missy", "Sphinx", false);

missy.beNice();
missy.makeSound();
missy.eatFood();