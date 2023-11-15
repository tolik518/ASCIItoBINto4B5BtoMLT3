export class TypeBinary {
    static fromAscii(ascii) {
        let binary = ascii.split('') //https://stackoverflow.com/a/38362821
            .map((char) => '00'.concat(char.charCodeAt(0).toString(2)).slice(-8))
            .join('').match(/.{4}/g);
        binary = binary || [""]; //wenn binary ist null oder undefined, dann setz auf leeres array
        let output = "";
        binary.forEach(function (bytes) {
            output += bytes + " ";
        });
        return output.trim();
    }
    static fromHex(hex) {
        let binary = hex.replace(/\s/g, '').match(/.{1,2}/g);
        binary = binary || [""]; //wenn binary ist null oder undefined, dann setz auf leeres array
        let output = "";
        if (binary[0] != "") {
            binary.forEach(function (bytes) {
                output += TypeBinary.hex2bin(bytes).replace(/\d{4}(?=.)/g, '$& ') + " ";
            });
        }
        return output.trim();
    }
    static get4b5bMap() {
        const keys = ["11110", "01001", "10100", "10101", "01010", "01011", "01110", "01111",
            "10010", "10011", "10110", "10111", "11010", "11011", "11100", "11101",
            "00100", "11111", "11000", "10001", "00110", "00000", "00111", "11001", "01101"]; //Command Characters
        const values = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111",
            "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111",
            "[_H]", "[_I]", "[_J]", "[_K]", "[_L]", "[_Q]", "[_R]", "[_S]", "[_T]"]; //Command Characters
        const bmap = new Map();
        for (let i = 0; i < keys.length; i++) {
            bmap.set(keys[i], values[i]);
        }
        return bmap;
    }
    static from4B5B(code4b5b) {
        let output = "";
        if (code4b5b == "") {
            output = "";
        }
        else {
            const map = this.get4b5bMap();
            let strArray = code4b5b.match(/.{1,6}/g);
            strArray = strArray || [""]; //wenn strArray ist null oder undefined, dann setz auf leeres array
            strArray.forEach(function (item) {
                output += map.get(item.trim()) == undefined ? "????" + " " : map.get(item.trim()) + " ";
            });
        }
        return output;
    }
    static hex2bin(hex) {
        return (parseInt(hex, 16).toString(2)).padStart(8, '0'); //https://stackoverflow.com/a/45054052
    }
}
