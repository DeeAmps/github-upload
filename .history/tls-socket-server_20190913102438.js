const tls = require('tls');
const fs = require('fs');

const port = process.env.PORT;

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('csr.pem')
}

const server = tls.createServer(options, (socket) => {
    socket.setEncoding('utf8');
    socket.write('I am the server sending you a message');

    socket.on('data', (data) => {
        console.log(`Received ${data.toString()} [${data.length} bytes long]`);
    });

    socket.on('end', () => {
        console.log('EOT, End Of Transmission');
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

server.on('error', (err) => {
    console.error(err);
    server.close();
})