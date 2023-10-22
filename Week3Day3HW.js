// Static Methods and Properties
class Governor {   
    static state = 'Alaska';
    static party ='Republican';
    static popularity = 82
    static greeting(state){
        console.log("Hello " + state + "!")
    }
    static campaigning(pop,state) {
        console.log(pop + "% of " + state + "'s citizen's approve of our leadership.")
    }
}
console.log(Governor.state)
console.log(Governor.party)
console.log(Governor.popularity)
Governor.greeting(Governor.state)
Governor.campaigning(Governor.popularity,Governor.state)

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
    working() {
        console.log("*Sorting packages")
    }
}
const pw1 = new PostalWorker("Blue", "Blonde", "Richie", "November 4th", 32)
const pw2 = new PostalWorker("Brown", "Black", "John", "March 17th", 44)
console.log(pw1)
pw1.hungry()
pw1.cold()
console.log(pw2)
pw2.working()
pw2.tired()

class Chef extends Person {
    working() {
        console.log("*Cooking")
    }
    hot() {
        console.log("It's too hot.")
    }
}
const c1 = new Chef("Black","Brown","Jeffrey","August 21st",40)
const c2 = new Chef("Blonde", "Brown","Barbara","September 13th", 28)
console.log(c1)
c1.hot()
c1.tired()
console.log(c2)
c2.working()
c2.hungry()
