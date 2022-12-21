const fs = require('fs');
console.log('start');
async function read_file() {
    try {
        // const dataFromFile = await fs.promises.readFile('./user.txt', 'utf-8');
        const dataFromFile = await fs.readFile('./user1.txt', 'utf8');
        console.log(dataFromFile);
    }
    catch (err) {
        console.log(err.message);
    }
}
read_file();
console.log('end');