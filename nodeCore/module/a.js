console.log("a start");
exports.done = false;
const b = require("./b");
console.log("in a, b is ", b.done);
exports.done = true;
console.log("a end");
console.log(module);
