class Calculadora{
    private _operando1: number;
    private _operando2: number;

    constructor(op1: number, op2: number){
        this._operando1 = op1;
        this._operando2 = op2;
    }

    get operando1(): number {
        return this._operando1;
    }
    get operando2(): number {
        return this._operando2;
    }

    soma(): number{
        return this._operando1 + this._operando2;
    }
}

class CalculadoraCientifica extends Calculadora{
    
    constructor(v1:number, v2:number){
        super(v1, v2);
    }

    exponenciar(): number {
        return this.operando1**this.operando2;
    }
}

let c : CalculadoraCientifica = new CalculadoraCientifica(5,2);
console.log(c.soma())
console.log(c.exponenciar())

/*
c) Foi necessário a implementação do método get para fazer a leitura dos operandos
dentro da classe CalculadoraCientifica
*/ 