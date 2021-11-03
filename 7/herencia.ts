class Avenger4{
    constructor(public nombre:string, private nombreReal:string){
        console.log("Constructor Avenger llamado");
    }

    protected getNombre():string{
        console.log("get nombre avenger (protegido)")
        return this.nombre;
    }
}

class Xmen extends Avenger4{
    constructor(a:string, b:string){
        console.log("Constructro Xmen llamado");
        super(a,b)
    }

    public getNombre():string{
        console.log("get nombre xmen (publico)")
        return super.getNombre();
    }
}

let ciclope: Xmen = new Xmen("Ciclope", "Scott");
console.log(ciclope);
console.log(ciclope.getNombre())