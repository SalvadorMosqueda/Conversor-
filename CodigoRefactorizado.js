
let assert = require('assert');

class Euro {
    constructor(cantidad) {
        this.cantidad = cantidad;
    }

    times() {
        return Euro(this.cantidad * 1 / 23.82); // Aqui se refactoriza el codigo
    }
}

let tenner = new Euro(5000).times();

assert.strictEqual(tenner.cantidad, 209.90);