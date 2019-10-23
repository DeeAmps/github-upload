const http = require('http');

const port = process.env.PORT || 300;

http.createServer((req, res) => {
    res.writeHead(200 , {'Content-Type': 'text/plain'});
    res.write('Hello, World!\n');
    res.end();
}).listen(port)