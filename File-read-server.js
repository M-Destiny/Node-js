const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./user.html', 'utf-8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' }); //used mime type for html files to be displayed in browser and its a header without this ou cant display html file in browser
        res.write(data);
        res.end();
    });
}).listen(6969, 'localhost', () => {
    console.log('Server Started');
});