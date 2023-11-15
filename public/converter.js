import { TypeASCII } from "./Types/TypeASCII.js";
import { TypeHex } from "./Types/TypeHex.js";
import { TypeBinary } from "./Types/TypeBinary.js";
import { Type4B5B } from "./Types/Type4B5B.js";
import { TypeMLT3 } from "./Types/TypeMLT3.js";
class converter {
    static writeConvertedASCII() {
        let ascii = this.value;
        elementASCII.value = ascii;
        let binary = TypeBinary.fromAscii(ascii);
        elementBinary.value = binary;
        let hex = TypeHex.fromAscii(ascii);
        elementHex.value = hex;
        let code4b5b = Type4B5B.fromBinary(binary);
        element4B5B.value = code4b5b;
        let codemlt3 = TypeMLT3.from4B5B(code4b5b);
        elementMLT3.value = codemlt3;
    }
    static writeConvertedHex() {
        let hex = this.value;
        elementHex.value = hex;
        let ascii = TypeASCII.fromHex(hex);
        elementASCII.value = ascii;
        let binary = TypeBinary.fromHex(hex);
        elementBinary.value = binary;
        let code4b5b = Type4B5B.fromBinary(binary);
        element4B5B.value = code4b5b;
        let codemlt3 = TypeMLT3.from4B5B(code4b5b);
        elementMLT3.value = codemlt3;
    }
    static writeConvertedBinary() {
        let binary = this.value;
        elementBinary.value = binary;
        let hex = TypeHex.fromBinary(binary);
        elementHex.value = hex;
        let ascii = TypeASCII.fromHex(hex);
        elementASCII.value = ascii;
        let code4b5b = Type4B5B.fromBinary(binary);
        element4B5B.value = code4b5b;
        let codemlt3 = TypeMLT3.from4B5B(code4b5b);
        elementMLT3.value = codemlt3;
    }
    static writeConverted4B5B() {
        let code4b5b = this.value;
        element4B5B.value = code4b5b;
        let binary = TypeBinary.from4B5B(code4b5b);
        elementBinary.value = binary;
        let hex = TypeHex.fromBinary(binary);
        elementHex.value = hex;
        let ascii = TypeASCII.fromHex(hex);
        elementASCII.value = ascii;
        let codemlt3 = TypeMLT3.from4B5B(code4b5b);
        elementMLT3.value = codemlt3;
    }
    static writeConvertedMLT3() {
        let codemlt3 = this.value;
        elementMLT3.value = codemlt3;
        let code4b5b = Type4B5B.fromMLT3(codemlt3);
        element4B5B.value = code4b5b;
        let binary = TypeBinary.from4B5B(code4b5b);
        elementBinary.value = binary;
        let hex = TypeHex.fromBinary(binary);
        elementHex.value = hex;
        let ascii = TypeASCII.fromHex(hex);
        elementASCII.value = ascii;
    }
}
const elementASCII = document.getElementById("ascii");
elementASCII.addEventListener("input", converter.writeConvertedASCII, false);
const elementHex = document.getElementById("hex");
elementHex.addEventListener("input", converter.writeConvertedHex, false);
const elementBinary = document.getElementById("binary");
elementBinary.addEventListener("input", converter.writeConvertedBinary, false);
const element4B5B = document.getElementById("4B5B");
element4B5B.addEventListener("input", converter.writeConverted4B5B, false);
const elementMLT3 = document.getElementById("MLT3");
elementMLT3.addEventListener("input", converter.writeConvertedMLT3, false);
