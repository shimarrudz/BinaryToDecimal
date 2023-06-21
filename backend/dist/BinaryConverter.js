"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryConverter = /** @class */ (function () {
    function BinaryConverter() {
        this.binaryNumber = "";
    }
    BinaryConverter.prototype.validateBinaryNumber = function (binaryNumber) {
        var binaryRegex = /^[01]+$/;
        return binaryRegex.test(binaryNumber);
    };
    BinaryConverter.prototype.convertToDecimal = function (binaryNumber) {
        if (!this.validateBinaryNumber(binaryNumber)) {
            throw new Error("Número binário inválido.");
        }
        var decimalNumber = 0;
        var binaryDigits = binaryNumber.split("").reverse();
        for (var i = 0; i < binaryDigits.length; i++) {
            var digit = parseInt(binaryDigits[i]);
            decimalNumber += digit * Math.pow(2, i);
        }
        return decimalNumber;
    };
    return BinaryConverter;
}());
exports.default = BinaryConverter;
