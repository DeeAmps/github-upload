const fs = require('fs');

// const readable =  fs.createReadStream('csr.pem');

// readable.on('data', (chunk) => {
//     console.log(chunk);
// })

fs.readFile('file.txt', (err, data) => {
    console.log(data);
});