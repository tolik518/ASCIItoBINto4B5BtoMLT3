export class TypeASCII
{
    public static fromHex(hex: string): string
    {
        // https://www.codegrepper.com/code-examples/javascript/hex+to+ascii+function+javascript
        hex  = hex.toString().replace(/\s/g, '');

        let ascii = '';
        for (let n = 0; n < hex.length; n += 2) {
            ascii += String.fromCharCode(parseInt(hex.slice(n, 2), 16));
        }

        return ascii;
    }
}