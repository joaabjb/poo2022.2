class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor (n1: number, n2: number, n3: number){
        this.forca = n1;
        this.nivel = n2;
        this.pontosAtuais = n3;
    }

    calcularAtaque(){
        return this.forca*this.nivel;
    } 

    atacar(jogador: Jogador){
        if(jogador.estaVivo()){
            jogador.pontosAtuais -= this.calcularAtaque() 
        }
    }

    estaVivo():boolean{
        if(this.pontosAtuais > 0) return true;
        return false;
    }

    toString():string{
        return this.forca + " " + this.nivel + " " + this.pontosAtuais;
    }

}

let j1 = new Jogador(70, 4, 700);
let j2 = new Jogador(90, 5, 800);

console.log(j1.toString())
console.log(j2.toString())

j1.atacar(j2);
j1.atacar(j2);
j1.atacar(j2);
j1.atacar(j2);

console.log(j1.toString())
console.log(j2.toString())
console.log(j1.estaVivo())
console.log(j2.estaVivo())

