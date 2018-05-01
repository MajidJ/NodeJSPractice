const Animal = require('./Animal');

class Fish extends Animal {
    constructor(weight, color, dangerous) {
        super();
        this.type = "fish";
        this.legs = 0;
        this.sound = "blub";
        this.tail = true;
        this.weight = weight;
        this.color = color;
        this.dangerous = dangerous;
    }
    makeBubbles() {
        console.log(`The ${this.type} blew bubbles.`);
    }
    weighFish() {
        console.log(`This fish weighs ${this.weight} pounds.`)
    }
}

const marly = new Fish(.5, "purple", true);

marly.makeBubbles();
marly.haveBabies();
marly.weighFish();