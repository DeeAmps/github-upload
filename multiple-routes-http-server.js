const http = require('http');
const port = require('port');

const routes = {
    '/' : (req, res) => {
        res.writeHead(200);
        res.send('Hello, World\n');
    },
    '/foo' : (req, res) => {
        res.writeHead(200);
        res.send('Hello, Foo\n');
    }
}

http.createServer((req, res) => {
    if (req.url in routes) {
        return routes[req.url](req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(port);