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

    const binaryDigits = binaryNumber.split("").reverse();

        // Fixing this for, converting to reduce method.
    // for (let i = 0; i < binaryDigits.length; i++) {
    //   const digit = parseInt(binaryDigits[i]);
    //   decimalNumber += digit * Math.pow(2, i);
    // }

const decimalNumber = binaryDigits.reduce((acc, digit, i) => {
  const decimalDigit = Number(digit);
  return acc + decimalDigit * Math.pow(2, i);
}, 0);

    return decimalNumber;
  }
}

export default BinaryConverter;