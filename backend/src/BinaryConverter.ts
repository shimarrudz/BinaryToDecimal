import { ERROR_INVALID_BINARY, ERROR_EMPTY_INPUT } from "../constants/index";

interface IBinaryConverter {
  convertToDecimal(binaryNumber: string): number;
}

// Mudar para maiusculas
// Testar o código
// Fazer as tratativas de erro
class BinaryConverter implements IBinaryConverter {
  private readonly binaryPattern = /^[01]+$/;
  private readonly binaryBase = 2;

  // Separar a validação
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
  
    // Retornar direto o reduce
    const decimalNumber = digits.reduce((acc, digit, idx) => {
      return acc + Number(digit) * Math.pow(this.binaryBase, idx)  // Transformar isso em uma função acc continua
    }, 0);

    return decimalNumber;
  }
}

export default BinaryConverter;
