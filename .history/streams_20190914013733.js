const fs = require('fs');

let chunks = [];
let fileBuffer;
const readable =  fs.createReadStream('file.txt');

readable.on('error', (err) => {
    console.log(err);
})

readable.on('data', (chunk) => {
    console.log(chunk.toString())
    // chunks.push(chunk.toString());
});


// readable.on('end', () => {
//     fileBuffer = Buffer.concat(chunks);
//     console.log(fileBuffer);
// })
