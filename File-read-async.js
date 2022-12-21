const fs = require('fs');
console.log('start');
var ans_file = fs.readFile('./user.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('end');