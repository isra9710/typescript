function editable(esEditable:boolean){
    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
        if(!esEditable){
            console.warn("No me harán cambiar de opinión");
        }
        descriptor.writable = esEditable;

    }
}



class Villano3 {
    constructor(public nombre:string){

    }
    @editable(true)
    plan(){
        console.log("Es dominar el mundo");
    }
}


let lex1 = new Villano3("Lex Luthor");

lex1.plan = function(){
    console.log("Cortar Flores");
}
lex1.plan();
