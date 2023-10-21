// Static Methods and Properties
class Governor {
    constructor () {    
    this.state = 'Alaska';
    this.party = 'Republican';
    this.popularity = 89;
    }
    greeting(){
        console.log("Hello " + this.state + "!")
    }
}

const executive = new Governor
console.log(executive.state)
console.log(executive.party)
console.log(executive.popularity)
executive.greeting()


// Inheritance
class Person {
    constructor(eyeColor, hairColor, name, birthDate, age) {
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.name = name;
        this.birthDate = birthDate;
        this.age = age
    }
    hungry() {
        console.log("I will eat.")
    }
    tired() {
        console.log("I will rest.")
    }
    cold() {
        console.log("I will put on a sweater.")
    }
}

class PostalWorker extends Person {

}
const pw1 = new PostalWorker("Blonde", "Blue", "Richie", "November 4th", 32)
const pw2 = new PostalWorker("Brown", "Black", "John", "March 17th", 44)
console.log(pw1)
pw1.hungry()
console.log(pw2)
pw2.tired()

class Chef extends Person {

}
const c1 = new Chef()
const c2 = new Chef()