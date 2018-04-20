// # **Instructions**

// * Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

// * Each character created using your constructor should have the following properties...
function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.PrintStatus = function() {
        // console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hitPoints);
        console.log(JSON.stringify(this));
        // console.log(this);
    }
    this.IsAlive = function() {
        if (hitPoints > 0) {
            console.log(this.name + ' is alive. For now...')
        } else {
            console.log(this.name + ' is dead. Such a shame. Welp...')
        }
    }
    this.Attack = function(target) {
        target.hitPoints -= this.strength;
        console.log(target.name + ' took some damage! They have ' + target.hitPoints + ' hit points left. In your face ' + target.name + '!')
    }
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
        console.log(`${this.name} leveled up yo! That's kinda rad. They are now ${this.age} years old, have ${this.strength} strength and have ${this.hitPoints} hit points.`)
    }
}
//  * Name: The character's name --> String

//  * Profession: What the character does for a living --> String

//  * Gender: The character's gender --> String

//  * Age: The character's age --> Integer

//  * Strength: Abstraction for how strong the character is --> Integer

//  * HitPoints (HP): Abstraction for how much health the character has --> Integer

//  * PrintStats: Function which prints all of a character's properties to the screen

//  * Once you have created your constructor, create two new characters and print their properties to the screen
const joe = new Character('Joe', 'plumber', 'male', 34, 4, 50);
const jane = new Character('Jane', 'waitress', 'female', 29, 7, 50);

// joe.PrintStatus();
// jane.PrintStatus();
joe.Attack(jane);
joe.levelUp();
jane.Attack(joe);

// console.log(joe.name);
//  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

//  * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

//  * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!