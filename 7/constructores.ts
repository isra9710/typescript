class Avenger1{
    nombre:string = "Sin Nombre";
    equipo:string;
    nombreReal:string;
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal
    }
    
}

let antman0:Avenger1= new Avenger1("Antman", "cap", "Scott Lang");
console.log(antman);