function sumar(a:number, b:number):number{
    return a + b;
}

function saludar(nombre:string):string{
    return "I'm " + nombre;
}

function salvarMundo():void{
    console.log("El mundo está salvado");
}
//Decirle a typescript que no puede mutar
//miFuncion = 10;
/*let miFuncion: (x:number, y:number)=>number ;
miFuncion = sumar;
console.log(miFuncion(5,5));*/
/*
let miFuncion: (x:string, y:string)=>string;
miFuncion = saludar;
console.log(miFuncion("Israel"));*/
let miFuncion:()=>void;
miFuncion = salvarMundo;
miFuncion();