class Avenger3{
    public nombre:string = "Sin Nombre";
    protected equipo:string;
    private nombreReal:string;
    private puedePelear:boolean = false;
    private peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal
    }

    public bio():void{
        let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean{
        if(nuevoEquipo === this.equipo){
            return false;
        }
        else{
            return true;
        }
    }

    public cambiaEquipoPublico(nuevoEquipo:string):boolean{
        return this.cambiarEquipo(nuevoEquipo);
    }
    
}

let antman2:Avenger3= new Avenger3("Antman", "cap", "Scott Lang");
console.log(antman2);

antman2.bio()
console.log(antman2.cambiaEquipoPublico("cap"))
