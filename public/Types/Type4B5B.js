"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type4B5B = void 0;
class Type4B5B {
    static get4b5bMap() {
        const keys = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111",
            "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111",
            "[_H]", "[_I]", "[_J]", "[_K]", "[_L]", "[_Q]", "[_R]", "[_S]", "[_T]"];
        const values = ["11110", "01001", "10100", "10101", "01010", "01011", "01110", "01111",
            "10010", "10011", "10110", "10111", "11010", "11011", "11100", "11101",
            "00100", "11111", "11000", "10001", "00110", "00000", "00111", "11001", "01101"];
        const bmap = new Map();
        for (let i = 0; i < keys.length; i++) {
            bmap.set(keys[i], values[i]);
        }
        return bmap;
    }
    static fromBinary(binary) {
        const map = this.get4b5bMap();
        let output = "";
        if (binary.includes(' ')) {
            let strArray = binary.match(/.{1,5}/g);
            strArray = strArray || [""];
            strArray.forEach(function (item) {
                output += map.get(item.trim()) == undefined ? "" : map.get(item.trim()) + " ";
            });
        }
        else {
            let strArray = binary.match(/.{1,4}/g);
            strArray = strArray || [""];
            strArray.forEach(function (item) {
                output += map.get(item) == undefined ? "" : map.get(item);
            });
        }
        return output.trim();
    }
    static fromMLT3(codemlt3) {
        let output = "";
        if (codemlt3 == "") {
            output = "";
        }
        else {
            let codemlt3array = codemlt3.replace(/\s/g, '').match(/./g);
            let lastsymbol = ["0"].concat(codemlt3array);
            for (let i = 0; i < codemlt3array.length; i++) {
                if (codemlt3array[i] == lastsymbol[i]) {
                    output += "0";
                }
                else if (codemlt3array[i] == " ") {
                    output += " ";
                }
                else {
                    output += "1";
                }
            }
        }
        return output.replace(/\d{5}(?=.)/g, '$& ').trim();
    }
}
exports.Type4B5B = Type4B5B;
