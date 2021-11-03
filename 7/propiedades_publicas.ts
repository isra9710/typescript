class Avenger2{
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
    
}

let antman1:Avenger2= new Avenger2("Antman", "cap", "Scott Lang");
console.log(antman1);