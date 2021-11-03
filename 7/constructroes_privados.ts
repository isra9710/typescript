class Apocalipsis{
    static instancia:Apocalipsis;
    private constructor(public nombre:string){

    }
    static llamarApocalipsis(){
        if(!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... El único!");
        }
        return Apocalipsis.instancia;
    }
}

//let apocalipsisFalso = new Apocalipsis("Soy apocalipsis falso");
let real = Apocalipsis.llamarApocalipsis();
console.log(real);