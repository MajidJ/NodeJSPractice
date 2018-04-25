function Vehicle(color, sound, numberOfEngines) {
    this.color = color;
    this.sound = sound;
    this.numberOfEngines = numberOfEngines;
    this.go = function() {
        console.log(this.sound);
    }
}


const jet = new Vehicle('white', 'zoom', 4);
const car = new Vehicle('black', 'vroom', 1);
const bike = new Vehicle('green', 'woosh', 0);

jet.go();
car.go();
bike.go();