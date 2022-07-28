
const assert = require('assert');


let fiver = new Euro(5);
let tenner = fiver.times();

assert.strictEqual(tenner.cantidad, 10);