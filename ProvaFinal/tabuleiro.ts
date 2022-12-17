import {AplicacaoError, IsercaoError, NumeroJaMarcadoError} from "./excecoes.js"


class Celula{
    private _estado: string;

    constructor(estado: string){
        this.estado = estado;
    }

    get estado(){
        return this._estado;
    }

    set estado(valor: string){
        this._estado = valor;
    }

    estadoAtual(){
        return this.estado;
    }

    alterarEstado(valor: string){
        this.estado = valor;
    }

}

class Tabuleiro{

    celulas: Celula [] = [];

    inserirCelula(c: Celula){
        this.celulas.push(c);
    }

    criarTabuleiro(){
        for( let i: number = 0; i < 9; i++){
            let c: Celula = new Celula(' ');
            this.inserirCelula(c)
        }
    }

    exibirCelula(numero: number): string{
        return this.celulas[numero].estado;
    }
    
    marcarCelula(numero: number, valor: string){
        if (numero < 0 || numero > 8){
            throw new IsercaoError('Numero inserido fora da faixa!')
        }
        if( this.celulas[numero].estadoAtual() != ' '){
            throw new NumeroJaMarcadoError('Opção já preenchida!')
        }
        this.celulas[numero].alterarEstado(valor);
    }   

    compararCelulas(i: number, j: number, k: number): boolean{
        if ( this.celulas[i].estado != ' ' && this.celulas[j].estado != ' ' && this.celulas[k].estado != ' '){
            if ((this.celulas[i].estado === this.celulas[j].estado) && (this.celulas[j].estado === this.celulas[k].estado)){
                return true;
            }
        }
        return false;

    }

    verificarGanhador():boolean {
        if (this.compararCelulas(0,1,2) || this.compararCelulas(3,4,5) || this.compararCelulas(6,7,8)){
            return true;
        }
        if (this.compararCelulas(0,4,8) || this.compararCelulas(2,4,6)){
            return true;
        }
        if (this.compararCelulas(0,3,6) || this.compararCelulas(1,4,7) || this.compararCelulas(2,5,8)){
            return true;
        }
        return false;
    }

    todasAsCelulasOcupadas():boolean{
        let n: number = 0;
        for (let i: number = 0; i < 9; i++){
            if (this.celulas[i].estado == 'X' || this.celulas[i].estado == 'O'){
                n += 1;
            }
        }
        if(n == 9){
            return true;
        }
        return false;
    }

}


export {Celula, Tabuleiro}




