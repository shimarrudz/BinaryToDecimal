import BinaryConverter from "./BinaryConverter";
import * as readline from "readline";

const converter = new BinaryConverter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número binário: ", (binaryNumber: string) => {
  try {
    const decimalNumber = converter.convertToDecimal(binaryNumber);
    console.log(`O número binário ${binaryNumber} é igual a ${decimalNumber} em decimal.`);
  } catch (error) {
    console.error(error.message);
  }

  rl.close();
});
