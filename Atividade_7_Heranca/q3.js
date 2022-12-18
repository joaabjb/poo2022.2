var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this._operando1 = op1;
        this._operando2 = op2;
    }
    Object.defineProperty(Calculadora.prototype, "operando1", {
        get: function () {
            return this._operando1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "operando2", {
        get: function () {
            return this._operando2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.soma = function () {
        return this._operando1 + this._operando2;
    };
    return Calculadora;
}());
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(v1, v2) {
        return _super.call(this, v1, v2) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this.operando1, this.operando2);
    };
    return CalculadoraCientifica;
}(Calculadora));
var c = new CalculadoraCientifica(5, 2);
console.log(c.soma());
console.log(c.exponenciar());
