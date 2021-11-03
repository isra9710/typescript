"use strict";
var hero = "Ricardo Tapia (Robin)";
//Esta es la edad del héroe
var age = 30;
var message = print(hero, age);
console.log(message);
function print(hero, age) {
    hero = hero.toLocaleLowerCase();
    age = age + 10;
    return hero + " " + age;
}
//# sourceMappingURL=app.js.map