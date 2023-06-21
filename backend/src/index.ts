import BinaryConverter from "./BinaryConverter";

const binaryNumber = "1101";
const converter = new BinaryConverter();
const decimalNumber = converter.convertToDecimal(binaryNumber);

console.log(`O número binário ${binaryNumber} é igual a ${decimalNumber} em decimal.`);
