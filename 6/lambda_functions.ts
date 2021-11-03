function sumar(a:number,b:number):number{
    return a+b;
}
console.log(sumar(2,2));


let sumar_lambda =  (a:number,b:number)=>a+b;
console.log(sumar_lambda(2,2));


function give_order(order:string){
    return `Hulk ${order}`;
}

console.log(give_order("smash!!!"))


let give_order_lambda = (order:string)=>`Hulk ${order}`;
console.log(give_order_lambda("smash!!!!"))

let capitan_america = {
    nombre: "Hulk",
    give_order_function:function(){
        let self = this;
        setTimeout(function(){
            console.log(self.nombre + " smash!!!!!");
        },4000)
        
    }
};


let capitan_america_lambda = {
    nombre:"Hulk",
    give_order_function:function(){
        setTimeout(()=> 
        console.log(this.nombre + " smash!!!!!!!"),5000);
    }
}

capitan_america.give_order_function();
capitan_america_lambda.give_order_function();