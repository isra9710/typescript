abstract class Mutantes{
    constructor(public nombre:string, public nombreReal:string){

    }
}

class Xmen2 extends Mutantes{
    
}

let wolverine3 = new Xmen2("Wolverine", "Logan");
console.log(wolverine3)