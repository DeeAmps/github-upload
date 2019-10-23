const https = require('https');
const fs = require('fs');

const port = process.env.PORt ||4433;

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-key.pem'),
};

https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello, World\n');
}).listen(port);

