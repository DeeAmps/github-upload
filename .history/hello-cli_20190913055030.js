const username = process.argv[2];
const path = require('path');
const filename = path.parse(__dirname).base;

if (!username) {
    const filename = path.parse().base;

}

console.log(username);