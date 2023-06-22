interface IBinaryConverter {
  convertToDecimal(binaryNumber: string): number;
}

class BinaryConverter implements IBinaryConverter {
  private binaryNumber: string;

  constructor() {
    this.binaryNumber = "";
  }

  private validateBinaryNumber(binaryNumber: string): boolean {
    const binaryRegex = /^[01]+$/;
    return binaryRegex.test(binaryNumber);
  }

  public convertToDecimal(binaryNumber: string): number {
    if (!this.validateBinaryNumber(binaryNumber)) {
      throw new Error("Número binário inválido.");
    }

    const digits = binaryNumber.split("").reverse();

const decimalNumber = digits.reduce((decimal, digit, idx) => {
  const decimalDigit = Number(digit);
  return decimal + decimalDigit * Math.pow(2, idx);
}, 0);

    return decimalNumber;
  }
}

export default BinaryConverter;