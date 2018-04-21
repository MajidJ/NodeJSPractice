

function Programers(name,jobTitle, age, programLang) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.age = age;
    this.programLang = programLang;
}


Programers.prototype.printInfo = function() {
    console.log(`Name: ${this.name} \nJob Title: ${this.jobTitle} \nAge: ${this.age} \nProgramming Language: ${this.programLang}`)
}


let James = new Programers('James', 'Developer', 24, 'Java');

James.printInfo();