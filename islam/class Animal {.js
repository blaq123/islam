class Animal {
    constructor(name, numberOflegs) {
        this.name = name;
        this.numberOflegs = numberOflegs;
    }
    
    eat() {
        console.log('eat');
    }
    
}

class Cat extends Animal {
    constructor(name, numberOflegs) {
        super(name, numberOflegs);
    }
}


class Bird extends Animal {
    constructor(name, numberOflegs, numberOfWings) {
        super(name, numberOflegs);
        this.numberOfWings = numberOfWings;
    }
}

const cat = new Cat('Fluffy', 4);
const bird = new Bird('Finch', 2, 4);
const bird2 = new Bird('Winnie', 2, 2);

cat.eat();
console.log(bird.name)
console.log(cat.name);
console.log(bird2.name);
bird.eat();
