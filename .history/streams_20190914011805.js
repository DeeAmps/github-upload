const fs = require('fs');

const readable =  fs.createReadStream('csr.pem');

readable.on('data', (chuck) => {
    console.log(chunk);
})