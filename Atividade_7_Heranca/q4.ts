class Conta {
    private _numero: string;
    private _saldo: number;
    
    constructor (n1: string, n2: number){
        this._numero = n1;
        this._saldo = n2;
    }
    
    get numero(): string {
        return this._numero;
    }
    get saldo():number {
        return this._saldo;
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }
    
    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }
    
    consultarSaldo(): number {
        return this._saldo;
    }
    
    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }       
}

class Poupanca extends Conta{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxa: number){
        super(numero, saldo);
        this._taxaJuros = taxa;
    }

    get taxaJuros():number {
        return this._taxaJuros;
    }

    renderJuros():void {
        this.depositar(this.saldo * this._taxaJuros/100);
    }

}

class Banco {
    
    private _contas: Conta[] = [];
    
    inserir(c: Conta): void {
        if(!this.consultar(c.numero)){
            this._contas.push(c);
        }
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this._contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
        
    consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    } 
    
    alterar(c: Conta): void {
        let indice =
        this.consultarIndice(c.numero);
        if (indice != -1) {
            this._contas[indice] = c;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
        this._contas.pop();
        }
    }

    depositar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    } 
    
    sacar(numero: string, valor: number){
        let conta: Conta = this.consultar(numero);
        if(conta){ //Só realiza o saque se a conta existir
            conta.depositar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaOrigem: Conta = this.consultar(numeroDebito);
        let contaDestino: Conta = this.consultar(numeroCredito);
        if(contaOrigem && contaDestino){ //Só realiza a transferencia caso as duas contas existam
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    quantContas(): number{
        return this._contas.length;
    }

    saldoTotal(): number{
        let saldo: number = 0;
        for (let conta of this._contas){
            saldo += conta.saldo;
        }
        return saldo;
    }

    mediaSaldo(): number{
        return (this.saldoTotal() / this.quantContas());
    }

    renderJuros(numero: string): void{
        let cc = this.consultar(numero);

        if(cc instanceof Poupanca){
            (<Poupanca> cc).renderJuros();
            //let p: Poupanca = <Poupanca> cc;
            //p.renderJuros();
        }
    }
}


let conta: Conta = new Conta('1', 100);
let poupanca: Poupanca = new Poupanca('2', 100, 0.5);
let poupanca2: Conta = new Poupanca('3', 100, 1);
let b: Banco = new Banco();
b.inserir(conta);
b.inserir(poupanca);
b.inserir(poupanca2);
console.log(b.quantContas());

b.renderJuros('3');
console.log(b.consultar('3').saldo);



/*
let b: Banco = new Banco();
b.inserir(new Conta("1", 100));
b.inserir(new Conta("2", 200));
console.log(b.consultar("3")); //200
b.inserir(new Conta("3", 200));
console.log(b.consultar("3"));
b.inserir(new Conta("3", 800));//Conta 3 já existe
console.log(b.consultar("3"));
b.transferir("2", "3", 150);
console.log("");
console.log(b.consultar("1"));
console.log(b.consultar("2"));
console.log(b.consultar("3"));
console.log(`Quantidade de contas: ${b.quantContas()}`);
console.log(`Saldo total do banco: ${b.saldoTotal()}`);
console.log(`A media de saldo por conta: ${b.mediaSaldo()}`);
*/ 