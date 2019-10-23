const fs = require('fs');

const readable =  fs.createReadStream('file.txt');

readable.on('data', (chunk) => {
    console.log(chunk);
})
