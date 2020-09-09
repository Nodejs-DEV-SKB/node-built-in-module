const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register a listener
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

// Raise an event
myEmitter.emit('event');