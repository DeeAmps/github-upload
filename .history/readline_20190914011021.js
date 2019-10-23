const readline = require('readline');
const fs = require('fs');

let numOfLines = 0;
const fl = readline.createInterface({
    input: fs.createReadStream('csr.pem'),
    output, process.stdout,
    terminal: false
});

fl.on('line', (line) => {
    numOfLines++;
    console.log(line);
});

fl.on('close', () => {
    console.log(`File has ${numOfLines} lines`)
})