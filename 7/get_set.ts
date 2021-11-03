class Avenger5{
    private _nombre:string;
    constructor ( nombre:string, nombreReal?:string){
        this._nombre = nombre;
    }

    get nombre():string{
        console.log("Pasó por el getNombre");
        if(this._nombre){
        return this._nombre;
        }else{
           return "No tiene un nombre el avenger"; 
        }
    }

    set nombre(nombre:string){
        console.log("Se pasó el set del nombre");
        if(nombre.length <= 3){
            throw new Error("Auxilio eso no debe de pasar...")
        }
        this._nombre = nombre;
    }
}

let ciclope0:Avenger5 = new Avenger5("Wolverine");
console.log(ciclope0.nombre)
ciclope0.nombre = "Ciclope"
console.log(ciclope0.nombre)