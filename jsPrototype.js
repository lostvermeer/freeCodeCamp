// const human = {
//     name: 'Joe',
//     age: 23,
//     heritage: 'British'
// }

function Human(name, age, iq){
    this.name = name;
    this.age = age;
    this.iq = iq;

}

// const humanMethods = {
//     eat() {
//         console.log(`${this.name} eats!`);
//         this.age++;
//     },
//     sleep() {
//         console.log(`${this.name} sleeps!`);
//         this.age--; 
//     }

// }

{
function Human(name, age, iq){
    this.name = name;
    this.age = age;
    this.iq = iq;

}

Human.prototype.eat = function(){
    console.log(`${this.name} eats!`);
    this.age++;
}

Human.prototype.sleep = function(){
    console.log(`${this.name} sleeps!`);
    this.age--;
}

Human.prototype.thinks = function(){
    console.log(`${this.name} NEVER thinks!!!`);
    this.age--;
}

//human.prototype.eat

let Kristof = new Human("Kristof", 56)
Kristof.sleep();
Kristof.eat();
Kristof.thinks();

let  Komila = new Human("Komila", 20, -67)
Komila.thinks()
}


{
class Human {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        eat(){
            console.log(`${this.name} eats!`);
            this.age--;
        }
        sleep(){
            console.log(`${this.name} sleeps!`);
            this.age--;
        }
}

let Griffin = new Human('Griffin', 34);
Griffin.sleep();

const type = Object.getPrototypeOf(Griffin)
//console.log(type)
type
console.log(Griffin.hasOwnProperty('name'))
console.log(Griffin instanceof Human)
}


console.log('------------------------');

var record = new Human('INC', 12)
record.eat();

while(record.next()) {
    gs.print(rec.name + ' exists')
}

