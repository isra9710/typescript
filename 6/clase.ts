class Avenger{
    constructor(nombre:string, poder:string){
        this.nombre = nombre;
        this.poder = poder;
    }   
}

class AvengerVolador extends Avenger{
    constructor(nombre:string, poder:string){
        super(nombre,poder);
        this.vuela = true;
    }
}
let hulk = new Avenger("Hulk", "Super Fuerza");
let falcon = new AvengerVolador("Falcón", "Volar");
console.log(hulk);
console.log(falcon)