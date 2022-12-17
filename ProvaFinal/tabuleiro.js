"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabuleiro = exports.Celula = void 0;
var excecoes_js_1 = require("./excecoes.js");
var Celula = /** @class */ (function () {
    function Celula(estado) {
        this.estado = estado;
    }
    Object.defineProperty(Celula.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        set: function (valor) {
            this._estado = valor;
        },
        enumerable: false,
        configurable: true
    });
    Celula.prototype.estadoAtual = function () {
        return this.estado;
    };
    Celula.prototype.alterarEstado = function (valor) {
        this.estado = valor;
    };
    return Celula;
}());
exports.Celula = Celula;
var Tabuleiro = /** @class */ (function () {
    function Tabuleiro() {
        this.celulas = [];
    }
    Tabuleiro.prototype.inserirCelula = function (c) {
        this.celulas.push(c);
    };
    Tabuleiro.prototype.criarTabuleiro = function () {
        for (var i = 0; i < 9; i++) {
            var c = new Celula(' ');
            this.inserirCelula(c);
        }
    };
    Tabuleiro.prototype.exibirCelula = function (numero) {
        return this.celulas[numero].estado;
    };
    Tabuleiro.prototype.marcarCelula = function (numero, valor) {
        if (numero < 0 || numero > 8) {
            throw new excecoes_js_1.IsercaoError('Numero inserido fora da faixa!');
        }
        if (this.celulas[numero].estadoAtual() != ' ') {
            throw new excecoes_js_1.NumeroJaMarcadoError('Opção já preenchida!');
        }
        this.celulas[numero].alterarEstado(valor);
    };
    Tabuleiro.prototype.compararCelulas = function (i, j, k) {
        if (this.celulas[i].estado != ' ' && this.celulas[j].estado != ' ' && this.celulas[k].estado != ' ') {
            if ((this.celulas[i].estado === this.celulas[j].estado) && (this.celulas[j].estado === this.celulas[k].estado)) {
                return true;
            }
        }
        return false;
    };
    Tabuleiro.prototype.verificarGanhador = function () {
        if (this.compararCelulas(0, 1, 2) || this.compararCelulas(3, 4, 5) || this.compararCelulas(6, 7, 8)) {
            return true;
        }
        if (this.compararCelulas(0, 4, 8) || this.compararCelulas(2, 4, 6)) {
            return true;
        }
        if (this.compararCelulas(0, 3, 6) || this.compararCelulas(1, 4, 7) || this.compararCelulas(2, 5, 8)) {
            return true;
        }
        return false;
    };
    Tabuleiro.prototype.todasAsCelulasOcupadas = function () {
        var n = 0;
        for (var i = 0; i < 9; i++) {
            if (this.celulas[i].estado == 'X' || this.celulas[i].estado == 'O') {
                n += 1;
            }
        }
        if (n == 9) {
            return true;
        }
        return false;
    };
    return Tabuleiro;
}());
exports.Tabuleiro = Tabuleiro;
