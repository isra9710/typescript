function planVillano(constructor:Function){
    constructor.prototype.imprimirPlan = function() {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    }
}

function imprimible(constructor:Function){
    constructor.prototype.imprimir = function() {
        console.log(this);
    }
}

@imprimible
@planVillano
class Villano2 {
    constructor( public nombre:string, public poder:string){

    }
}

let lex = new Villano2("Lex Luthor", "Super mente"); 

(<any>lex).imprimirPlan();
(<any>lex).imprimir();