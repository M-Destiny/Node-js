const HTTP = require('http');
HTTP.createServer((req, res) => {
    var userInfo = JSON.stringify([{ name: 'Destiny', age: 21 }, { name: 'Peter Griffin', age: 69 }]);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(userInfo);
    res.end();
}).listen(6969, 'localhost', () => {
    console.log('Server Started');
});