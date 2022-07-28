
let assert = require('assert');

class Euro {
    constructor(cantidad) {
        this.cantidad = cantidad;
    }

    times() {
        const valorEuro = 23.82;
        let operacionConvertirPesosMXaEuros = (this.cantidad * 1) / valorEuro;
        let euro = Euro(operacionConvertirPesosMXaEuros)
        return euro;
    }
}

let fiver = new Euro(5000);
let tenner = fiver.times();

assert.strictEqual(tenner.cantidad, 209.90);