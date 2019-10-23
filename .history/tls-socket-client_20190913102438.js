const tls = require('tls');
const fs = require('fs');

const port = process.env.PORT || 3000;
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false
}

const client = tls.connect(options, () => {
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