class Radio {
    volume : number;
    constructor(volume : number) {
    this.volume = volume;
    }
   }
   let r : Radio = new Radio(5);
   console.log(r.volume)

   /*R: A presença do construtor exige que a variável seja inicializada
    na instanciação. Uma solução seria iniciar variável volume na instanciação.
    Outra solução seria omitir o construtor.*/