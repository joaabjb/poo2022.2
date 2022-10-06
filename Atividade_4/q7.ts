class Equipamento{
    ligado: boolean;

    constructor (estado:boolean){
        this.ligado = estado;
    }

    liga():void{
        if (this.ligado == false){
            this.ligado = true;
        }
    }
    
    desliga():void{
        if (this.ligado == true){
            this.ligado = false;
        }
    }
    
    inverte():void{
        if(this.ligado == true){
            this.ligado = false;
        }
        else{
            this.ligado = true;
        }
    }
    
    estadoLigado():boolean{
        return this.ligado;
    }
}

let e = new Equipamento(true);
e.liga();
console.log(e.estadoLigado());
e.desliga();
console.log(e.estadoLigado());
e.inverte();
console.log(e.estadoLigado());