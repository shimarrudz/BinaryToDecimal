"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryConverter_1 = require("./BinaryConverter");
var binaryNumber = "1101";
var converter = new BinaryConverter_1.default();
var decimalNumber = converter.convertToDecimal(binaryNumber);
console.log("O n\u00FAmero bin\u00E1rio ".concat(binaryNumber, " \u00E9 igual a ").concat(decimalNumber, " em decimal."));
