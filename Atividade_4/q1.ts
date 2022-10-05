class Hotel {
    quantReservas : number;
    
    adicionarReserva() : void {
        this.quantReservas++;
    }
    
}

let c1 = new Hotel();
c1.adicionarReserva();
console.log(c1.quantReservas);

/*R: Não haverá erro de compilação, porém a variável quantReservas 
    apresentará valor NaN*/