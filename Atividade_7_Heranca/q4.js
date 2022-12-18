class Conta {
    constructor(n1, n2) {
        this._numero = n1;
        this._saldo = n2;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
class Poupanca extends Conta {
    constructor(numero, saldo, taxa) {
        super(numero, saldo);
        this._taxaJuros = taxa;
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
}
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(c) {
        if (!this.consultar(c.numero)) {
            this._contas.push(c);
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this._contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this._contas[indice] = c;
        }
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta) { //Só realiza o saque se a conta existir
            conta.depositar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaOrigem = this.consultar(numeroDebito);
        let contaDestino = this.consultar(numeroCredito);
        if (contaOrigem && contaDestino) { //Só realiza a transferencia caso as duas contas existam
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    quantContas() {
        return this._contas.length;
    }
    saldoTotal() {
        let saldo = 0;
        for (let conta of this._contas) {
            saldo += conta.saldo;
        }
        return saldo;
    }
    mediaSaldo() {
        return (this.saldoTotal() / this.quantContas());
    }
    renderJuros(numero) {
        let cc = this.consultar(numero);
        if (cc instanceof Poupanca) {
            cc.renderJuros();
            //let p: Poupanca = <Poupanca> cc;
            //p.renderJuros();
        }
    }
}
let conta = new Conta('1', 100);
let poupanca = new Poupanca('2', 100, 0.5);
let poupanca2 = new Poupanca('3', 100, 1);
let b = new Banco();
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
