"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeHex = void 0;
class TypeHex {
    static fromAscii(ascii) {
        let hex = ascii.split('')
            .map((char) => ''.concat(char.charCodeAt(0).toString(16)).slice(-8))
            .join('').match(/.{2}/g);
        hex = hex || [""];
        let output = "";
        hex.forEach(function (bytes) {
            output += bytes + " ";
        });
        return output.trim();
    }
    static fromBinary(binary) {
        let output = "";
        if (binary !== "") {
            let hex = binary.trim().split(' ');
            hex.forEach(function (bytes) {
                output += parseInt(bytes, 2).toString(16).toUpperCase().replace(/NAN/g, "?");
            });
            output = output.match(/.{1,2}/g).join(' ');
        }
        return output.trim();
    }
}
exports.TypeHex = TypeHex;
