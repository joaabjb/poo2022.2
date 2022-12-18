var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this._operando1 = op1;
        this._operando2 = op2;
    }
    Calculadora.prototype.soma = function () {
        return this._operando1 + this._operando2;
    };
    return Calculadora;
}());
var c = new Calculadora(5, 3);
console.log(c.soma());
