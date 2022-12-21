const fs = require('fs/promises'); //using promises to read file async way
console.log('start');
(async () => {
    // Using IIFE to make async function to run in IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog
    try {
        const dataFromFile = await fs.readFile('./user.html', 'utf-8');
        console.log(dataFromFile);
    }

    catch (err) {
        console.log(err.message);
    }
})();

console.log('end');
