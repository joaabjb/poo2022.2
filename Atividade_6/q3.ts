class Conta {
    numero: String;
    saldo: number;
    
    constructor (n1: string, n2: number){
        this.numero = n1;
        this.saldo = n2;
    }
    
    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }
    
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    
    consultarSaldo(): number {
        return this.saldo;
    }
    
    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }       
}


class Banco {
    private contas: Conta[] = [];
    inserir(c: Conta): void {
        if(!this.consultar(c.numero)){
            this.contas.push(c);
        }
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
        
    private consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
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
            this.contas[indice] = c;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
        this.contas.pop();
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
        return this.contas.length;
    }

    saldoTotal(): number{
        let saldo: number = 0;
        for (let conta of this.contas){
            saldo += conta.saldo;
        }
        return saldo;
    }

    mediaSaldo(): number{
        return (this.saldoTotal() / this.quantContas());
    }


}

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