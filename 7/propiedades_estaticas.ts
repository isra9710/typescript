class Xmen1{
    static nombre:string = "Wolverine";
    constructor(){

    }
    static crearXmen(){
        console.log("Se creó usando un metodo estatico");
        return new Xmen1();
    }
}

console.log(Xmen1.nombre);
let wolverine2 = Xmen1.crearXmen();
console.log(wolverine2);