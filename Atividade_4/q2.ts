class Hotel {
    quantReservas : number;
    
    constructor (n:number){
        this.quantReservas = n;
    }

    adicionarReserva() : void {
        this.quantReservas++;
    }
    
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);