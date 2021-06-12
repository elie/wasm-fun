const assert = require("assert");
const myModule = require("..");
assert.strictEqual(myModule.getDivisors(2234), [1, 2, 1117, 2234]);
console.log("ok");
