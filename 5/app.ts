let hero:string = "Ricardo Tapia (Robin)";
//Esta es la edad del héroe
let age:number = 30;

let message = print(hero,age);

console.log(message);

function print(hero:string, age:number):string{
    hero = hero.toLocaleLowerCase();
    age = age + 10;
    return hero + " " + age;
}