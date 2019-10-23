const fs = require('fs');

let chunks = [];
let fileBuffer;
const readable =  fs.createReadStream('file.txt');

readable.on('data', (chunk) => {
    chunks.push(chunk);
    console.log(chunks);
})
