//Decorador de clase normal
function consola1(constructor:Function){
    console.log(constructor);
}
//Decorador Factory
function imprimirConsola(imprimir:boolean):Function{
    if(imprimir){
        return consola1;
    }else{
        return function hola(){
            return null;
        };
    }
}  

@imprimirConsola(true)
class Villano1{
    constructor(public nombre:string){}
}