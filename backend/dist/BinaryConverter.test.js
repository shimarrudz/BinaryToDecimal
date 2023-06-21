"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryConverter_1 = require("./BinaryConverter");
describe("BinaryConverter", function () {
    var binaryConverter;
    beforeEach(function () {
        binaryConverter = new BinaryConverter_1.default();
    });
    it("should convert binary number '1101' to decimal 13", function () {
        var binaryNumber = "1101";
        var decimalNumber = binaryConverter.convertToDecimal(binaryNumber);
        expect(decimalNumber).toBe(13);
    });
    it("should throw an error for invalid binary number '1234'", function () {
        var binaryNumber = "1234";
        expect(function () {
            binaryConverter.convertToDecimal(binaryNumber);
        }).toThrowError("Número binário inválido.");
    });
});
