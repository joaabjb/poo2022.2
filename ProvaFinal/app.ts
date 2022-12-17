import { Celula, Tabuleiro } from "./tabuleiro.js";
import {AplicacaoError, IsercaoError, NumeroJaMarcadoError} from "./excecoes.js"


let input = require('prompt-sync')();
let t: Tabuleiro = new Tabuleiro();
t.criarTabuleiro()
let jogador: number = 1;
let casa: string = 'X'
let opcao: number;

do {
    try{
        console.log(`\nDigite uma opção jogador ${jogador}:`);
        console.log(`\n ${t.celulas[0].estado} | ${t.celulas[1].estado} | ${t.celulas[2].estado} \n ` +
                    `${t.celulas[3].estado} | ${t.celulas[4].estado} | ${t.celulas[5].estado} \n `+
                    `${t.celulas[6].estado} | ${t.celulas[7].estado} | ${t.celulas[8].estado} \n `);
        
        console.log('modelo:\n'+
                    '1|2|3\n' +
                    '4|5|6\n' +
                    '7|8|9\n');
        
        console.log("Digite 0 para encerrar")
        opcao = input(`Opção (JG${jogador}:${casa})):`);
        
        if (opcao != 0){
            marcarCelula(opcao);
            if(avaliaResultado()){
                break
            };
            mudaValores();
            input('Casa marcada. Proximo jogador! <enter>');
        }
        
    
    } catch (e:any){
        if( e instanceof IsercaoError){
            console.log(e.message);
        }
        else if (e instanceof NumeroJaMarcadoError){
            console.log(e.message);
        }
        else if (e instanceof AplicacaoError) {
            console.log(e.message);
        } 
        else{
            console.log("Erro não esperado.");
        }
    }

} while (opcao! != 0);
console.log("Jogo encerrado");


function marcarCelula(num: number): void {
    let celula: number = num-1;
    t.marcarCelula(celula, casa)
}    

function mudaValores(): void {
    if (jogador == 1){
        jogador = 2;
    }
    else{
        jogador = 1;
    }
    if (casa == 'X'){
        casa = 'O';
    }
    else{
        casa = 'X';
    }
}

function avaliaResultado(): boolean{
    if(t.verificarGanhador()){
        console.log(`O jogador ${jogador} venceu o jogo!`)
        return true;
    }
    if(t.todasAsCelulasOcupadas()){
        console.log(`Sem vencedor!`);
        return true;
    }
    return false;
}