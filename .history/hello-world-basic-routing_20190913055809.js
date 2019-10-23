const http = require('http');
const port = require('port');

const handleIndexRoute = (req, res) => {
    res.writeHead(200);
    res.send('Hello, World\n');
} 

http.createServer((req, res) => {
    if (req.url === '/') {
        return handleIndexRoute(req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(port);