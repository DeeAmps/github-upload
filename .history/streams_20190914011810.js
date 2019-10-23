const fs = require('fs');

const readable =  fs.createReadStream('csr.pem');

readable.on('data', (chunk) => {
    console.log(chunk);
})