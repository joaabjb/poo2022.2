
class Conta {
    numero: String;
    saldo: number;
    
    constructor (n1:string, n2:number){
        this.numero = n1;
        this.saldo = n2;
    }

    sacar(valor: number): boolean {
        if(this.saldo - valor >= 0){
            this.saldo -= valor;
            return true;
        }
        else return false;
        
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor) == true){
            contaDestino.depositar(valor);
            return true;
        }
        else return false;
        
    }
}


let c1 = new Conta("1", 0);
let c2 = new Conta("2", 0);
c1.depositar(4000);
console.log(`Sacar c1: ${c1.sacar(2000)}`);
console.log(`Transferir c1 para c2: ${c1.transferir(c2, 2000)}`);
console.log(`Saldo c1: ${c1.consultarSaldo()}`);
console.log(`Saldo c2: ${c2.consultarSaldo()}`);
