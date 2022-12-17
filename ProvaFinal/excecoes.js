"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroJaMarcadoError = exports.IsercaoError = exports.AplicacaoError = void 0;
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(message) {
        return _super.call(this, message) || this;
    }
    return AplicacaoError;
}(Error));
exports.AplicacaoError = AplicacaoError;
var IsercaoError = /** @class */ (function (_super) {
    __extends(IsercaoError, _super);
    function IsercaoError(message) {
        return _super.call(this, message) || this;
    }
    return IsercaoError;
}(AplicacaoError));
exports.IsercaoError = IsercaoError;
var NumeroJaMarcadoError = /** @class */ (function (_super) {
    __extends(NumeroJaMarcadoError, _super);
    function NumeroJaMarcadoError(message) {
        return _super.call(this, message) || this;
    }
    return NumeroJaMarcadoError;
}(AplicacaoError));
exports.NumeroJaMarcadoError = NumeroJaMarcadoError;
