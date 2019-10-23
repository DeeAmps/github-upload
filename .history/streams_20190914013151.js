const fs = require('fs');

let fileBuffer;
const readable =  fs.createReadStream('file.txt');

readable.on('data', (chunk) => {
    fileBuffer = Buffer.concat(chunk)
    console.log(fileBuffer);
})
