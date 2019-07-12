import Person from './Person';

let p = new Person('Marcos Paegle', 32);

console.dir(p);
console.log(`${p.greet()}\nYou are ${p.howOldAmI()} years old.`);