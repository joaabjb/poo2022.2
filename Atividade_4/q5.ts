class Saudacao{
    texto: string;
    destinatario: string;

    constructor (texto: string, destinatario: string){
        this.texto = texto;
        this.destinatario = destinatario;        
    }

    obterSaudacao():string {
        return this.texto + ", " + this.destinatario;
    }
}

let s = new Saudacao("Oi", "Joaab");
console.log(s.obterSaudacao());