"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabuleiro_js_1 = require("./tabuleiro.js");
var excecoes_js_1 = require("./excecoes.js");
var input = require('prompt-sync')();
var t = new tabuleiro_js_1.Tabuleiro();
t.criarTabuleiro();
var jogador = 1;
var casa = 'X';
var opcao;
do {
    try {
        console.log("\nDigite uma op\u00E7\u00E3o jogador ".concat(jogador, ":"));
        console.log("\n ".concat(t.celulas[0].estado, " | ").concat(t.celulas[1].estado, " | ").concat(t.celulas[2].estado, " \n ") +
            "".concat(t.celulas[3].estado, " | ").concat(t.celulas[4].estado, " | ").concat(t.celulas[5].estado, " \n ") +
            "".concat(t.celulas[6].estado, " | ").concat(t.celulas[7].estado, " | ").concat(t.celulas[8].estado, " \n "));
        console.log('modelo:\n' +
            '1|2|3\n' +
            '4|5|6\n' +
            '7|8|9\n');
        console.log("Digite 0 para encerrar");
        opcao = input("Op\u00E7\u00E3o (JG".concat(jogador, ":").concat(casa, ")):"));
        if (opcao != 0) {
            marcarCelula(opcao);
            if (avaliaResultado()) {
                break;
            }
            ;
            mudaValores();
            input('Casa marcada. Proximo jogador! <enter>');
        }
    }
    catch (e) {
        if (e instanceof excecoes_js_1.IsercaoError) {
            console.log(e.message);
        }
        else if (e instanceof excecoes_js_1.NumeroJaMarcadoError) {
            console.log(e.message);
        }
        else if (e instanceof excecoes_js_1.AplicacaoError) {
            console.log(e.message);
        }
        else {
            console.log("Erro não esperado.");
        }
    }
} while (opcao != 0);
console.log("Jogo encerrado");
function marcarCelula(num) {
    var celula = num - 1;
    t.marcarCelula(celula, casa);
}
function mudaValores() {
    if (jogador == 1) {
        jogador = 2;
    }
    else {
        jogador = 1;
    }
    if (casa == 'X') {
        casa = 'O';
    }
    else {
        casa = 'X';
    }
}
function avaliaResultado() {
    if (t.verificarGanhador()) {
        console.log("O jogador ".concat(jogador, " venceu o jogo!"));
        return true;
    }
    if (t.todasAsCelulasOcupadas()) {
        console.log("Sem vencedor!");
        return true;
    }
    return false;
}
