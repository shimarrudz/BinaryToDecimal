interface IBinaryConverter {
  convertToDecimal(binaryNumber: string): number;
}

class BinaryConverter implements IBinaryConverter {
  private readonly binaryPattern = /^[01]+$/;

  private validateBinaryNumber(binaryNumber: string): boolean {
    return this.binaryPattern.test(binaryNumber);
  }

  public convertToDecimal(binaryNumber: string): number {
    if (!this.validateBinaryNumber(binaryNumber)) {
      throw new Error("Número binário inválido.");
    }

    const digits = binaryNumber.split("").reverse();

    const decimalNumber = digits.reduce((acc, digit, idx) => acc + Number(digit) * Math.pow(2, idx), 0);

    

    return decimalNumber;
  }
}

export default BinaryConverter;
