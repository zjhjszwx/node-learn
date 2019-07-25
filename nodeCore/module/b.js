console.log('b start');
exports.done = false;
const a = require('./b')
console.log('in b, a is ',a.done);
exports.done = true;
console.log('b end');