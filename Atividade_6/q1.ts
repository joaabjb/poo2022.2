class Calculadora{
    private operandoUm: number;
    private operandoDois: number;

    constructor (a:number, b:number){
        this.operandoUm = a;
        this.operandoDois = b;
    }

    somar():number{
        return this.operandoUm + this.operandoDois;
    }
    subtrair():number{
        return this.operandoUm - this.operandoDois;
    }
}

let c1 = new Calculadora(5,3);

console.log(c1.somar())
console.log(c1.subtrair())
