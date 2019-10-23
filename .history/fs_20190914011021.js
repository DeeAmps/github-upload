const fs = require('fs');

// With Encoding
fs.readFile('private-key.pem', { encoding: 'utf8' }, (err, data) => {
    if (err) { console.error(err); return };
    console.log(data);
});

// Without Encoding
fs.readFile('private-key.pem', (err, data) => {
    if (err) { console.error(err); return };
    console.log(data); // returns a Buffer
});

fs.readdir('node_modules', (err, subs) => {
    if (err) { console.error(err); return };
    // subs returns an array of all files and sub directories
    console.log(subs.join(' '));
});

fs.createReadStream('public-key.pem', { encoding: 'utf8' }).pipe(fs.createWriteStream('new-public-key.pem'));

//Check if file exists and access rights to it
fs.access('private-key.pem', fs.constants.X_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) return console.log('File doesnt exists')
    else console.log('can execute/read/wirte file');
});

fs.exists('', exists => console.log(`File exists? ${exists}`));

const readable = fs.createReadStream('public-key.pem', { encoding: 'utf8' });
const writable = fs.createWriteStream('new-public-key.pem');
readable.on('data', (chunk) => {
    writable.write(chunk);
});

fs.writeFile('new-public-key.pem', 'Hello world', (err) => {
    if (err) console.log(err);
})