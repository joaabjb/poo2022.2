class Hora{
    private hora:number;
    private minutos:number;
    private segundos:number;

    constructor(h:number, m:number, s:number){
        this.hora = h;
        this.minutos = m;
        this.segundos = s;
    }

    lerHora():number{
        return this.hora;
    }

    lerMinutos():number{
        return this.minutos;
    }

    lerSegundos():number{
        return this.segundos;
    }

    lerHorario():string{
        return this.hora + ":" + this.minutos + ":" + this.segundos 
    }

}

let h1 = new Hora(21, 15, 22);

console.log(h1.lerHora());
console.log(h1.lerMinutos());
console.log(h1.lerSegundos());
console.log(h1.lerHorario());