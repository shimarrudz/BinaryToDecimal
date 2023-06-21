import BinaryConverter from "./BinaryConverter";

describe("BinaryConverter", () => {
  let binaryConverter: BinaryConverter;

  beforeEach(() => {
    binaryConverter = new BinaryConverter();
  });

  it("should convert binary number '1101' to decimal 13", () => {
    const binaryNumber = "1101";
    const decimalNumber = binaryConverter.convertToDecimal(binaryNumber);
    expect(decimalNumber).toBe(13);
  });

  it("should throw an error for invalid binary number '1234'", () => {
    const binaryNumber = "1234";
    expect(() => {
      binaryConverter.convertToDecimal(binaryNumber);
    }).toThrowError("Número binário inválido.");
  });
});
