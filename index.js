// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called listener: ', data));

// logger.log('Hello world')
// logger.log('Hi')
// logger.log('Hello')
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        });
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        });
    }

    if (req.url === '/api/users') {
        const users = [
            { name: 'John Doe', age: 30 },
            { name: 'Bob Smith', age: 30 }

        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Server running on port ', PORT));
