const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}
let myEmitter = new MyEmitter()
myEmitter.on('emit',()=>{
    console.log('trigger........');
})
myEmitter.emit('emit');