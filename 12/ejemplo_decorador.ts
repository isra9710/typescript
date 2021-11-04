function planVillano(constructor:Function){
    constructor.prototype.imprimirPlan = function() {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    }
}

function imprimible(constructor:Function){
    constructor.prototype.imprimir = function() {
        console.log();
    }
}


@planVillano
class Villano2 {
    constructor( public nombre:string){

    }
}

let lex = new Villano2("Lex Luthor"); 

(<any>lex).imprimirPlan();