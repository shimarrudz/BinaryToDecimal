import { ERROR_INVALID_BINARY, ERROR_EMPTY_INPUT } from "../constants/index";

interface IBinaryConverter {
  convertToDecimal(binaryNumber: string): number;
}

class BinaryConverter implements IBinaryConverter {
  private readonly binaryPattern = /^[01]+$/;
  private readonly binaryBase = 2;

  private isBinary(binaryNumber: string): boolean {
    if (!binaryNumber || binaryNumber.trim() === "") {
      throw new Error(ERROR_EMPTY_INPUT);
    }
    return this.binaryPattern.test(binaryNumber);
  }
  
  public convertToDecimal(binaryNumber: string): number {
    if (!this.isBinary(binaryNumber)) {
      throw new Error(ERROR_INVALID_BINARY);
    }

    const digits = binaryNumber.split("").reverse();

    const decimalNumber = digits.reduce((acc, digit, idx) => acc + Number(digit) * Math.pow(this.binaryBase, idx), 0);

    return decimalNumber;
  }
}

export default BinaryConverter;
