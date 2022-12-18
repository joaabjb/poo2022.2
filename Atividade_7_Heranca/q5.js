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
var Produto = /** @class */ (function () {
    function Produto(ident, desc, quant, valor) {
        this._identificador = ident;
        this._descricao = desc;
        this._quantEstoque = quant;
        this._valUnit = valor;
    }
    Object.defineProperty(Produto.prototype, "identificador", {
        get: function () {
            return this._identificador;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "quantEstoque", {
        get: function () {
            return this._quantEstoque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "valUnit", {
        get: function () {
            return this._valUnit;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.reporProduto = function (quant) {
        this._quantEstoque += quant;
    };
    Produto.prototype.baixaProduto = function (quant) {
        this._quantEstoque -= quant;
    };
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(ident, desc, quant, valor, validade) {
        var _this = _super.call(this, ident, desc, quant, valor) || this;
        _this._dataVal = validade;
        return _this;
    }
    Object.defineProperty(ProdutoPerecivel.prototype, "dataVal", {
        get: function () {
            return this._dataVal;
        },
        enumerable: false,
        configurable: true
    });
    ProdutoPerecivel.prototype.estaValido = function () {
        var dataValidade = new Date(this._dataVal);
        var dataAtual = new Date();
        if (dataValidade >= dataAtual) {
            return true;
        }
        else
            return false;
    };
    ProdutoPerecivel.prototype.reporProduto = function (quant) {
        if (this.estaValido()) {
            _super.prototype.reporProduto.call(this, quant);
        }
        else {
            console.log("Produto Vencido");
        }
    };
    ProdutoPerecivel.prototype.baixaProduto = function (quant) {
        if (this.estaValido()) {
            _super.prototype.baixaProduto.call(this, quant);
        }
        else {
            console.log("Produto Vencido");
        }
    };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this._produtos = [];
    }
    Estoque.prototype.inserir = function (p) {
        if (this.consultarPeloId(p.identificador) == -1) {
            if (!this.consultaPeloNome(p.descricao)) {
                this._produtos.push(p);
            }
        }
        else {
            console.log("Id ou nome já existente");
        }
    };
    Estoque.prototype.consultaPeloNome = function (nome) {
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].descricao == nome) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    Estoque.prototype.consultarPeloId = function (n) {
        var indice = -1;
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].identificador == n) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Estoque.prototype.excluir = function (n) {
        var indice = this.consultarPeloId(n);
        if (indice == -1) {
            console.log("Produto não existe");
        }
        else {
            for (var i = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
            this._produtos.pop();
        }
    };
    Estoque.prototype.repor = function (id, quant) {
        var i = this.consultarPeloId(id);
        if (i != -1) {
            this._produtos[i].reporProduto(quant);
        }
        else {
            console.log("Produto não encontrado");
        }
    };
    Estoque.prototype.darBaixa = function (id, quant) {
        var i = this.consultarPeloId(id);
        if (i != -1) {
            this._produtos[i].baixaProduto(quant);
        }
        else {
            console.log("Produto não encontrado");
        }
    };
    Estoque.prototype.todosOsProdutos = function () {
        for (var i = 0; i < this._produtos.length; i++) {
            console.log("Produto ".concat(i + 1));
            console.log("Identificador: ".concat(this._produtos[i].identificador));
            console.log("Nome: ".concat(this._produtos[i].descricao));
            if (this._produtos[i] instanceof ProdutoPerecivel) {
                console.log("Validade: ".concat(this._produtos[i].dataVal));
            }
            console.log("\n");
        }
    };
    return Estoque;
}());
var p1 = new ProdutoPerecivel(1, 'arroz', 5, 20, '2022-11-18');
var p2 = new ProdutoPerecivel(2, 'feijao', 5, 5, '2023-01-14');
var p3 = new ProdutoPerecivel(3, 'macarrao', 5, 4, '2023-11-17');
var e = new Estoque();
e.inserir(p1);
e.inserir(p2);
e.inserir(p3);
e.todosOsProdutos();
//console.log(p.estaValido())
