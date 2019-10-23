const username = process.argv[2];
const path = require('path');

if (!username) {
    const filename = path.parse().base;

}

console.log(__filename);