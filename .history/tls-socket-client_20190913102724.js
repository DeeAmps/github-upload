const tls = require('tls');
const fs = require('fs');

const port = process.env.PORT || 1337;
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false
}

const client = tls.connect(port, '127.0.0.1', options, () => {
    if (client.authorized) {
        console.log('Connection authorized by a Certification authority!');
    } else {
        console.log('Connection not authorised: ' + client.authorizationError);
        return;
    }
    client.write('I am the client sending you a message!');
});


client.on('data', (data) => {
    console.log(`Received ${data.toString()} [${data.length} bytes long]`);
    client.end();
});

client.on('close', () => {
    console.log('Connection closed!');
})