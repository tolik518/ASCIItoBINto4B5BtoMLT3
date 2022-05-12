export class TypeHex {
    static fromAscii(ascii) {
        let hex = ascii.split('') //https://stackoverflow.com/a/38362821
            .map((char) => ''.concat(char.charCodeAt(0).toString(16)).slice(-8))
            .join('').match(/.{2}/g);
        hex = hex || [""]; //wenn binary ist null oder undefined, dann setz auf leeres array
        let output = "";
        hex.forEach(function (bytes) {
            output += bytes + " ";
        });
        return output.trim();
    }
    static fromBinary(binary) {
        let output = "";
        if (binary == "") {
            output = "";
        }
        else {
            let hex = binary.trim().split(' ');
            hex.forEach(function (bytes) {
                output += parseInt(bytes, 2).toString(16).toUpperCase().replace(/NAN/g, "?");
            });
            output = output.match(/.{1,2}/g).join(' '); //leerzeichen nach 2 symbolen hinzufügen
        }
        return output.trim();
    }
}
