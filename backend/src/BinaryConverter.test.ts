import BinaryConverter from "./BinaryConverter";

// Testar os tests
// Arrumar os it´s
// Testar todos os metodos de forma unitária de todas as possibilidades

describe("Binary to Decimal Converter", () => {
  let binaryConverter: BinaryConverter;

  beforeEach(() => {
    binaryConverter = new BinaryConverter();
  });

  it("should be able to convert a valid binary number to decimal", () => {
    const binaryNumber = "1101";
    const expectedDecimal = 13;
    const decimalNumber = binaryConverter.convertToDecimal(binaryNumber);
    expect(decimalNumber).toBe(expectedDecimal);
  });

  it("should not be able to convert an invalid binary number", () => {
    const binaryNumber = "1234";
    expect(() => {
      binaryConverter.convertToDecimal(binaryNumber);
    }).toThrowError("Invalid binary number.");
  });

  it("should not convert then throw an error for an empty string", () => {
    const binaryNumber = "";
    expect(() => {
      binaryConverter.convertToDecimal(binaryNumber);
    }).toThrowError("Invalid binary number.");
  });

  it("should not convert then throw an error for a binary number with a special character", () => {
    const binaryNumber = "101#1";
    expect(() => {
      binaryConverter.convertToDecimal(binaryNumber);
    }).toThrowError("Invalid binary number.");
  });

  it("should not convert then throw an error for a binary number with a letter", () => {
    const binaryNumber = "101A1";
    expect(() => {
      binaryConverter.convertToDecimal(binaryNumber);
    }).toThrowError("Invalid binary number.");
  });

  it("should not convert then throw an error for a binary number of type number instead of string", () => {
    const binaryNumber = "10101";
    expect(() => {
      binaryConverter.convertToDecimal(binaryNumber);
    }).toThrowError("Invalid binary number.");
  });
});
