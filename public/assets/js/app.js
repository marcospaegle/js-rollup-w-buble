'use strict';

var Person = function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.howOldAmI = function howOldAmI () {
    return this.age;
};

Person.prototype.greet = function greet () {
    return ("Hello " + (this.name) + ".");
};

var p = new Person('Marcos Paegle', 32);

console.dir(p);
console.log(((p.greet()) + "\nYou are " + (p.howOldAmI()) + " years old."));
