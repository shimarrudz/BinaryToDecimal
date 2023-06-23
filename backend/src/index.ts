import BinaryConverter from "./BinaryConverter";
import * as readline from "readline";
import * as errors from "../constants/index";

const converter = new BinaryConverter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número binário: ", (binaryNumber: string) => {
  try {
    if (!binaryNumber) {
      throw new Error(errors.ERROR_EMPTY_INPUT);
    }

    const decimalNumber = converter.convertToDecimal(binaryNumber);
    console.log(`O número binário ${binaryNumber} é igual a ${decimalNumber} em decimal.`);
  } catch (error) {
    console.error(getErrorMessage(error));
  }

  rl.close();
});

function getErrorMessage(error: Error): string {
  switch (error.message) {
    case errors.ERROR_INVALID_BINARY:
      return "Número binário inválido.";
    case errors.ERROR_EMPTY_INPUT:
      return "O número binário não pode estar vazio.";
    case errors.ERROR_INVALID_CHARACTER:
      return "O número binário contém caracteres inválidos.";
    case errors.ERROR_INVALID_TYPE:
      return "O valor fornecido não é uma string.";
    case errors.ERROR_OVERFLOW:
      return "O número binário resultou em um valor decimal maior do que o máximo suportado.";
    default:
      return "Erro desconhecido.";
  }
}
