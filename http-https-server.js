const http = require('http');
const https = require('https');
const fs = require('fs');

const port = process.env.PORT ||4433;
const httpPort = 8000;

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-key.pem'),
};

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello, World\n');
}).listen(httpPort);

https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello, World\n');
}).listen(port);

