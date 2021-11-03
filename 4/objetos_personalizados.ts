let flash_2:{name:string, age:number, powers:string[], getName:()=>string} = {
    name: "Barry Allen",
    age: 24,
    powers: ["Puede correr muy rápido", "Viajar por el tiempo"],
    getName():string{
        return this.name;
    }
};

let superman_1 : {name:string, age:number, powers:string[], getName:()=>string} = {
    name: "Clark Kent",
    age: 500,
    powers: ["Puede Volar", "Super Velocidad"],
    getName():string{
        return this.name;
    }
};
