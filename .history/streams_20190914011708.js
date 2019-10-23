const fs = require('fs');

const readable =  fs.createReadStream('csr.pem');

console.log(readable);