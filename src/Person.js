class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    howOldAmI() {
        return this.age;
    }

    greet() {
        return `Hello ${this.name}.`;
    }
}

export default Person;