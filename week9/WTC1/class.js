class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello I'm ${this.name}`);
    }
    setName(newname){
        this.name = newname;
    }
}
const person1 = new Human("John", 25);
person1.setName("Peter");
const person2 = new Human("Anna", 32);
person2.sayHello()
person1.sayHello()