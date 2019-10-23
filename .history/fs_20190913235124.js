const fs = require('fs');

// // With Encoding
// fs.readFile('private-key.pem', { encoding: 'utf8' }, (err, data) => {
//     if (err) { console.error(err); return };
//     console.log(data);
// });

// // Without Encoding
// fs.readFile('private-key.pem', (err, data) => {
//     if (err) { console.error(err); return };
//     console.log(data); // returns a Buffer
// });

// fs.readdir('node_modules', (err, subs) => {
//     if (err) { console.error(err); return };
//     // subs returns an array of all files and sub directories
//     console.log(subs.join(' '));
// });

fs.createReadStream('public-key.pem', { encoding: 'utf8' }).pipe(fs.createWriteStream('new-public-key.pem'));
