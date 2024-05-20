"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeASCII = void 0;
class TypeASCII {
    static fromHex(hex) {
        hex = hex.toString().replace(/\s/g, '');
        let ascii = '';
        for (let n = 0; n < hex.length; n += 2) {
            ascii += String.fromCharCode(parseInt(hex.slice(n, 2), 16));
        }
        return ascii;
    }
}
exports.TypeASCII = TypeASCII;
