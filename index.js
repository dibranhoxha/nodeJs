// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called listener: ', data));

logger.log('Hello world')
logger.log('Hi')
logger.log('Hello')
