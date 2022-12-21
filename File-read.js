const fs = require('fs');
console.log('start');
var ans_file = fs.readFileSync('./user.txt', 'utf-8');
console.log(ans_file);
console.log('end');