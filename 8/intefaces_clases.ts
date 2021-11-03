interface Xmen{
    nombre:string;
    nombreReal?:string;
    regenerar( nombreReal:string):void;
}


class Mutante implements Xmen{
    nombre:string;
    poder:string;
    esBueno:boolean;
    regenerar(nombre:string){
        console.log("Hola " + nombre);
    }
}

let wolverine5 = new Mutante();