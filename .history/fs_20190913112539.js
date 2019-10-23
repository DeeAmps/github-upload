const fs = require('fs');

fs.readFile('private-key.pem', { encoding: 'utf8' }, (err, data) => {
    if (err) { console.error(err); return };
    console.log(data);
})