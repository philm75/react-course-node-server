const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw Error;
    console.log(data);
});