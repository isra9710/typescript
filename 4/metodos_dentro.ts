let flash_1:{name:string, age:number, powers:string[], getName:()=>string} = {
    name: "Barry Allen",
    age: 24,
    powers: ["Puede correr muy rápido", "Viajar por el tiempo"],
    getName():string{
        return this.name;
    }
};

flash_1.getName()
