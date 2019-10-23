const username = process.argv[2];
const path = require('path');
const filename = path.parse(__filename).base;

if (!username) {
    console.log(`Missing argument! Example: node ${filename} YOUR_NAME`);
    process.exit(1);
}
console.log(`Hello ${username}`);