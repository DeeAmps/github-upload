const fs = require('fs');

let chunks = [];
let fileBuffer;
const readable =  fs.createReadStream('file.txt');

readable.on('error', (err) => {
    console.log(err);
})

readable.on('data', (chunk) => {
    chunks.push(chunk);
});


readable.on('end', () => {
    fileBuffer = Buffer.concat(chunks);
    console.log(fileBuffer);
})
